import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Grid from './components/Grid';
import GridIA from './components/GridIA';
import Score from './components/Score';
import Message from './components/Message';
import ButtonShips from './components/ButtonShips';
import ButtonStart from './components/ButtonStart';

import LogoSite from'./assets/Logo-site.png'


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
    // console.log(e)
    this.setState({ selectedboat: e })
  }
  // la function updateboatPosition Recupere en parametre les index des div de mon state grid dans grid.js
  // avec des condition elle nous dit si nous avon selection le bouton destroyeur ,carier etc ...
  // et apres sa nous permet de push dans le tableau correspondant au boutton les valeur des parametre de la function qui sont case cliquer
  // nous avon aussi des condition qui nous permette de ne pas depasser le nombre de case que correspond le bateau choisi
  updateBoatPosition(i, j){
    const {selectedboat} =this.state
    const compareDestroyeur = ["1","1"]
    const compareCruiser = ["1","1","1"]
    const compareSubmarine = ["1","1","1","1"]
    const compareCarrier = ["1","1","1","1","1"]

    if(selectedboat === "destroyer"){
      this.setState({destroyer: [`${i}${j}`, `${i}${j+1}` , ...this.state.destroyer]});
      console.log(this.state.destroyer , "- destroyer log")
      if(this.state.destroyer.length >= compareDestroyeur.length){
        this.setState({destroyer: this.state.destroyer});
        console.log(this.state.cruiser, "- destroyer log2")
      }
    } else if(selectedboat === "cruiser"){
      this.setState({cruiser: [`${i}${j}`, `${i}${j+1}`, `${i}${j+2}` , ...this.state.cruiser]})
      console.log(this.state.cruiser, "- cruiser log")
      if(this.state.cruiser.length >= compareCruiser.length){
        this.setState({cruiser: this.state.cruiser});
        console.log(this.state.cruiser, "- cruiser log2")
      }
    } else if(selectedboat === "submarine"){
      this.setState({submarine: [`${i}${j}`, `${i}${j+1}`, `${i}${j+2}`, `${i}${j+3}`, ...this.state.submarine]})
      console.log(this.state.submarine, "- submarine log")
      if(this.state.submarine.length >= compareSubmarine.length){
        this.setState({submarine: this.state.submarine});
        console.log(this.state.submarine, "- submarine log2")
      }
    } else if(selectedboat === "carrier"){
      this.setState({carrier: [`${i}${j}`, `${i}${j+1}`, `${i}${j+2}`, `${i}${j+3}`, `${i}${j+4}`, ...this.state.carrier]})
      console.log(this.state.carrier, "- carrier log")
      if(this.state.carrier.length >= compareCarrier.length){
        this.setState({carrier: this.state.carrier});
        console.log(this.state.carrier, "- carrier log2")
      }   
    }
    console.log("X = ", i, "Y = ", j)
  }

  render() {
    
    return (
      <>
        <img src={LogoSite} alt="Battleship" />
        <ButtonStart />
          
        <div className="row justify-content-between mt-5 pb-5"> 
          <div className="col-5 ms-4">
            <Score typeofPlayer="Player" />
            <Grid  
              carrier={this.state.carrier}
              submarine={this.state.submarine}
              cruiser={this.state.cruiser} 
              destroyer={this.state.destroyer} 
              updateBoatPosition={this.updateBoatPosition} 
            />
          </div>
          <div className="col-1">
            <Message />
          </div>
          <div className="col-5">
            <Score typeofPlayer="Computer"/>
            <GridIA />
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

