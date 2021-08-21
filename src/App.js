import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Component } from 'react'

class App extends Component {

  state = {
    foodsArr: foods
  }
  render() {
    return (
      <div className="App">
        <FoodBox listOfFoods={this.state.foodsArr}></FoodBox>
      </div>
    )
  }
}


export default App;
