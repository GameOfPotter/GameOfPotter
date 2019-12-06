import React, { Component } from "react";
import "./styles/App.css";
import GetGotCharacters from './GetGotCharacters'
import GetHpCharacters from './GetHpCharacter'

let arrayOfHouses = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      hpCharacters: [],
      gotCharacters: [],
      gotHouses: [
        "House Stark",
        "House Lannister",
        "House Tyrell",
        "House Greyjoy",
      ],
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <GetGotCharacters/>
        <GetHpCharacters/>
        <RandomizeCharacter gotCharactersArray={this.state.gotCharacters}/>

      </div>
    );
  }
}

export default App;
