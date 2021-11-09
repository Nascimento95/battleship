import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Grid from './components/Grid';
import Message from './components/Message';
import ButtonShips from './components/ButtonShips';


class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center">BattleShip Game</h1> 
        <div className="row justify-content-between mt-5 pb-5"> 
          <div className="col-5 ms-4">
            <Grid />
          </div>
          <div className="col-1">
            <Message />
          </div>
          <div className="col-5">
            <Grid />
          </div>
        </div>
        <ButtonShips />
      </>

    )
  }
}

export default App;

