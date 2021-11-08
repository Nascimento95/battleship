import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonShips from './components/ButtonShips';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>BattleShip Game</h1>
        {/* <Score /> */}
        {/* <MainGrid> */}
          {/* <GridPlayer /> */}
          {/* <GridIA /> */}
        {/* </MainGrid> */}
        {/* <Message /> */}
        <ButtonShips />
      </div>
    )
  }
}

export default App;

