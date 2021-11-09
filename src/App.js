import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Grid from './components/Grid';

import ButtonShips from './components/ButtonShips';


class App extends React.Component {
  constructor (){
    super()

    this.state = {
        destroyer: 2,
        cruiser: 3,
        submarine: 4,
        carrier: 5
    }
    
    this.chooseShip = this.handleChooseShip.bind(this)
}

handleChooseShip(e) {
console.log(e)
}

  render() {
    return (

      <>
        <h1 className="text-center">BattleShip Game</h1>

        <div className="d-flex">
          <Grid boatposition={this.handleChooseShip}/>
          <Grid />
        </div>
        <ButtonShips text="destroyer" onClick={() => this.handleChooseShip(this.state.destroyer)} />
        <ButtonShips text="cruiser"  onClick={() => this.handleChooseShip(this.state.cruiser)}/>
        <ButtonShips text="submarine" onClick={() => this.handleChooseShip(this.state.submarine)} />
        <ButtonShips text="carrier"  onClick={() => this.handleChooseShip(this.state.carrier)}/>
      </>

    )
  }
}

export default App;

