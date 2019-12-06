import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import RandomizeCharactersHP from './RandomizeCharactersHP';

class GetHpCharacters extends Component {
  constructor() {
    super();
    this.state = {
      hpCharacters: [{
        name: "",
        house: "",
        birth: "",
        image: ""
      }],
    };
  }

  componentDidMount() {
    axios({
      url: `http://hp-api.herokuapp.com/api/characters`,
      method: "get",
    }).then(data => {

      let arrayOfCharacters = [];

      data.data.forEach(character => {
        if (character.house !== "" && character.yearOfBirth !== "") {
          const characterObject = {
            name: character.name,
            house: character.house,
            image: character.image,
            birth: character.yearOfBirth,
          };
          arrayOfCharacters.push(characterObject);  

        }
      });
      this.setState({
        hpCharacters: arrayOfCharacters,
      });
    });
  }
  render() {
    return (
      <div className='hpCharacters'>
        <RandomizeCharactersHP charactersArray={this.state.hpCharacters}/>
        {/* {this.state.hpCharacters.map(character => {
          return (
            <div className='test2'>
              <h3>{character.name}</h3>
              <p>{character.house}</p>
              <p>{character.birth}</p>
              <img className='hpImages' src={character.image} alt='' />
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default GetHpCharacters;
