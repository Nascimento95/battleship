import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Grid from './components/Grid';
import Score from './components/Score';
import Message from './components/Message';
import ButtonShips from './components/ButtonShips';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedboat: "",
      destroyer: [],
      cruiser: [],
      submarine: [],
      carrier: [],
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
    return (
      <>
        <h1 className="text-center">BattleShip Game</h1> 
        <div className="row justify-content-between mt-5 pb-5"> 
          <div className="col-5 ms-4">
            <Score typeofPlayer="Player" />
            <Grid />
          </div>
          <div className="col-1">
            <Message />
          </div>
          <div className="col-5">
            <Score typeofPlayer="Computer"/>
            <Grid />
          </div>
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

