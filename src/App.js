import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import RandomizeCharacters from './RandomizeCharacters';
import GetCharacterImages from './RandomizeCharacters'

let arrayOfHouses = []
class App extends Component {
  constructor() {
    super();
    this.state = {
      HPCharacters: [],
      gotCharacters: [],
      hpHouses: [],
      gotHouses: ['House Stark', 'House Lannister', 'House Tyrell', 'House Greyjoy'],
    };
  }

  
  componentDidMount() {

      const gotMultipleAPI = Promise.all([
        axios.get(`https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[0]}`),
        axios.get(`https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[1]}`),
        axios.get(`https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[2]}`),
        axios.get(`https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[3]}`),
      ]).then((data)=>{

        data.forEach(house=>{
          house.data.forEach(character=>{
            const characterObject = {name: character.name,
            house: character.house, alive: character.alive};

            this.setState({
              gotCharacters: [...this.state.gotCharacters, characterObject]
            })
          })
        });
        console.log(this.state.gotCharacters);
      });

      axios({
        method: 'get',
        url: 'https://www.potterapi.com/v1/characters',
        dataResponse: 'json',
        params: {
          key: '$2a$10$F5zeX2iHFskAgcz4ovhm4.BUaurcM.C9u5ncrkPda4RSBOgdTO8JK',
        },
      }).then(data => {
        console.log(data.data);
  
        this.setState({
          HPCharacters: data.data,
        })

    });
  }


  render() {
    // console.log(this.state.GoTCharacters[0]);
    
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <RandomizeCharacters IndividualGotProp ={this.state.gotCharacters}/>
      </div>
    );
  }
}

export default App;
