import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from './components/Grid';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center">BattleShip Game</h1>
        {/* <Score />
        <MainGrid>
          <GridPlayer />
          <GridIA />
        </MainGrid>
        <Message /> */}
        <div className="d-flex">
          <Grid />
          <Grid />
        </div>
        
      </>
    )
  }
}

export default App;

