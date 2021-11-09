import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Grid from './components/Grid';

import ButtonShips from './components/ButtonShips';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedboat: "",
      destroyer: [],
      cruiser: [],
      submarine: [],
      carrier: []
    }

    this.handleChooseShip = this.handleChooseShip.bind(this)
    this.updateBoatPosition = this.updateBoatPosition.bind(this)
  }

  handleChooseShip(e) {
    console.log(e)
    this.setState({ selectedboat: e })
  }

  updateBoatPosition(i, j){
    this.setState({destroyer: i, j})
  
  }

  render() {
    // console.log(this.state.selectedboat)
    console.log("This is it " , this.state.destroyer)
    return (
      <>
        <h1 className="text-center">BattleShip Game</h1>

        <div className="d-flex">
          <Grid updateBoatPosition={this.updateBoatPosition} />
          <Grid />
        </div>
        <ButtonShips text="destroyer" onClick={this.handleChooseShip} />
        <ButtonShips text="cruiser" onClick={this.handleChooseShip} />
        <ButtonShips text="submarine" onClick={this.handleChooseShip} />
        <ButtonShips text="carrier" onClick={this.handleChooseShip} />
      </>

    )
  }
}

export default App;

