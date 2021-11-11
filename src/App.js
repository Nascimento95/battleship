import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Grid from './components/Grid';
import Score from './components/Score';
import Message from './components/Message';
import ButtonShips from './components/ButtonShips';
import ButtonStart from './components/ButtonStart';

import LogoSite from'./assets/Logo-site.png';
import ButtonShip2 from'./assets/ButtonShip-2.png';
import ButtonShip3 from'./assets/ButtonShip-3.png';
import ButtonShip4 from'./assets/ButtonShip-4.png';
import ButtonShip5 from'./assets/ButtonShip-5.png';
import Rotate from'./assets/rotate.png';
// import Sea from'./assets/sea.svg'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedboat: "",
      destroyer: [],
      cruiser: [],
      submarine: [],
      carrier: [],
      destroyerIa: [],
      cruiserIa: [],
      submarineIa: [],
      carrierIa: [],
      touchArray: [],
      touchArrayIa: [],
      flopAray: [],
      message: "Positionner votre flotte puis cliquer sur start _",
      turn: "Orizontal",
      fleetPlayer: 4,
      fleetIA: 4,
      scorePlayer: 0,
      scoreIA: 0,
    }

    this.handleChooseShip = this.handleChooseShip.bind(this)
    this.updateBoatPosition = this.updateBoatPosition.bind(this)
    this.chooseIa = this.chooseIa.bind(this)
    this.handleshoot = this.handleshoot.bind(this)
    this.displayMessage = this.displayMessage.bind(this)
    this.changePosition = this.changePosition.bind(this)
    this.shootIa = this.shootIa.bind(this)
  }
  displayMessage() {

  }
  chooseIa() {
    let positionDestroyer = ["11"]
    let positionCruiser = ["31"]
    let positionSubmarine = ["46"]
    let positionCarrier = ["310"]
    // coordonée de destroyer
    for (let i = 0; i < 1; i++) {
      const split = positionDestroyer[i].split("")
      split[1]++
      const newPosition = split.join("");
      positionDestroyer = [...positionDestroyer, newPosition]
    }
    // coordonée de cruiser
    for (let i = 0; i < 2; i++) {
      const split = positionCruiser[i].split("")
      split[1]++
      const newPosition = split.join("");
      positionCruiser = [...positionCruiser, newPosition]
    }
    // coordonée de submarine
    for (let i = 0; i < 3; i++) {
      const split = positionSubmarine[i].split("")
      split[0]++
      const newPosition = split.join("");
      positionSubmarine = [...positionSubmarine, newPosition]
    }
    // coordonée de carrier
    for (let i = 0; i < 4; i++) {
      const split = positionCarrier[i].split("")
      split[0]++
      const newPosition = split.join("");
      positionCarrier = [...positionCarrier, newPosition]
    }

    this.setState({
      destroyerIa: positionDestroyer,
      cruiserIa: positionCruiser,
      submarineIa: positionSubmarine,
      carrierIa: positionCarrier
    })

  }

  handleChooseShip(e) {
    this.setState({ selectedboat: e })
  }
  // la function updateboatPosition Recupere en parametre les index des div de mon state grid dans grid.js
  // avec des condition elle nous dit si nous avon selection le bouton destroyeur ,carier etc ...
  // et apres sa nous permet de push dans le tableau correspondant au boutton les valeur des parametre de la function qui sont case cliquer
  // nous avon aussi des condition qui nous permette de ne pas depasser le nombre de case que correspond le bateau choisi
  
  updateBoatPosition(i, j) {
    const { selectedboat } = this.state
    const compareDestroyeur = ["1", "1"]
    const compareCruiser = ["1", "1", "1"]
    const compareSubmarine = ["1", "1", "1", "1"]
    const compareCarrier = ["1", "1", "1", "1", "1"]

    if (selectedboat === "destroyer") {
      this.setState({ destroyer: [`${i}${j}`, `${i}${j + 1}`, ...this.state.destroyer] });
      // console.log(this.state.destroyer, "- destroyer log")
      if (this.state.destroyer.length >= compareDestroyeur.length) {
        this.setState({ destroyer: this.state.destroyer });
      }
    } else if (selectedboat === "cruiser") {
      this.setState({ cruiser: [`${i}${j}`, `${i}${j + 1}`, `${i}${j + 2}`, ...this.state.cruiser] })
      // console.log(this.state.cruiser, "- cruiser log")
      if (this.state.cruiser.length >= compareCruiser.length) {
        this.setState({ cruiser: this.state.cruiser });
      }
    } else if (selectedboat === "submarine") {
      this.setState({ submarine: [`${i}${j}`, `${i}${j + 1}`, `${i}${j + 2}`, `${i}${j + 3}`, ...this.state.submarine] })
      // console.log(this.state.submarine, "- submarine log")
      if (this.state.submarine.length >= compareSubmarine.length) {
        this.setState({ submarine: this.state.submarine });
      }
    } else if (selectedboat === "carrier") {
      this.setState({ carrier: [`${i}${j}`, `${i}${j + 1}`, `${i}${j + 2}`, `${i}${j + 3}`, `${i}${j + 4}`, ...this.state.carrier] })
      // console.log(this.state.carrier, "- carrier log")
      if (this.state.carrier.length >= compareCarrier.length) {
        this.setState({ carrier: this.state.carrier });
      }
    }

    if (selectedboat === "destroyer" && this.state.turn === "Vertical") {
      this.setState({ destroyer: [`${i}${j}`, `${i + 1}${j}`, ...this.state.destroyer] })
      // console.log(this.state.destroyer, "- destroyer vertical")
      if (this.state.destroyer.length >= compareDestroyeur.length) {
        this.setState({ destroyer: this.state.destroyer });
      }
    } else if (selectedboat === "cruiser" && this.state.turn === "Vertical") {
      this.setState({ cruiser: [`${i}${j}`, `${i + 1}${j}`, `${i + 2}${j}`, ...this.state.cruiser] })
      // console.log(this.state.cruiser, "- cruiser vertical")
      if (this.state.cruiser.length >= compareCruiser.length) {
        this.setState({ cruiser: this.state.cruiser });
      }
    } else if (selectedboat === "submarine" && this.state.turn === "Vertical") {
      this.setState({ submarine: [`${i}${j}`, `${i + 1}${j}`, `${i + 2}${j}`, `${i + 3}${j}`, ...this.state.submarine] })
      // console.log(this.state.submarine, "- submarine vertical")
      if (this.state.submarine.length >= compareSubmarine.length) {
        this.setState({ submarine: this.state.submarine });
      }
    } else if (selectedboat === "carrier" && this.state.turn === "Vertical") {
      this.setState({ carrier: [`${i}${j}`, `${i + 1}${j}`, `${i + 2}${j}`, `${i + 3}${j}`, `${i + 4}${j}`, ...this.state.carrier] })
      // console.log(this.state.carrier, "- carrier vertical")
      if (this.state.carrier.length >= compareCarrier.length) {
        this.setState({ carrier: this.state.carrier });
      }
    }
    
  }

  handleshoot(i, j) {
    let destroyerTouch = []
    let cruiserTouch = []
    let submarineTouch = []
    let carrierTouch = []
    let positionShoot = `${i}${j}`
    let botIa = 5

    for(let i = 0 ; i < this.state.destroyerIa.length ; i++){
      let isTouch = [positionShoot, ...this.state.touchArray].includes(this.state.destroyerIa[i])
       if(isTouch){
           destroyerTouch= [this.state.destroyerIa[i], ...destroyerTouch]
       }
    } 
    for(let i = 0 ; i < this.state.cruiserIa.length ; i++){
    let isTouch = [positionShoot, ...this.state.touchArray].includes(this.state.cruiserIa[i])
     if(isTouch){
      cruiserTouch= [this.state.cruiserIa[i], ...cruiserTouch]
    }
    } 
    for(let i = 0 ; i < this.state.submarineIa.length ; i++){
      let isTouch = [positionShoot, ...this.state.touchArray].includes(this.state.submarineIa[i])
        if(isTouch){
          submarineTouch= [this.state.submarineIa[i], ...submarineTouch]
        }
    } 
    for(let i = 0 ; i < this.state.carrierIa.length ; i++){
      let isTouch = [positionShoot, ...this.state.touchArray].includes(this.state.carrierIa[i])
        if(isTouch){
          carrierTouch= [this.state.carrierIa[i], ...carrierTouch]
        }
    }

    if(destroyerTouch.length === this.state.destroyerIa.length){
      this.setState({
        message: "destroyer coulé",
        fleetIA: this.state.fleetIA -1,
        
      })
      botIa = botIa -1
      destroyerTouch = []
      if(this.state.fleetIA < botIa){
        this.setState({fleetIA: this.state.fleetIA})
      }
    } 
    
    if(cruiserTouch.length === this.state.cruiserIa.length){
      this.setState({
        message: "cruiser coulé",
        fleetIA: this.state.fleetIA -1
      })
      botIa = botIa -1
      cruiserTouch = []
      if(this.state.fleetIA < botIa){
        this.setState({fleetIA: this.state.fleetIA})
      }
    }
    
    if(submarineTouch.length === this.state.submarineIa.length){
      this.setState({
        message: "cruiser coulé",
        fleetIA: this.state.fleetIA -1

      })
      botIa = botIa -1
      // submarineTouch = []
      if(this.state.fleetIA < botIa){
        this.setState({fleetIA: this.state.fleetIA})
      }
    }

    if(carrierTouch.length === this.state.carrierIa.length){
      this.setState({
        message: "carrier coulé",
        fleetIA: this.state.fleetIA -1

      })
      botIa = botIa -1
      // submarineTouch = []
      if(this.state.fleetIA < botIa){
        this.setState({fleetIA: this.state.fleetIA})
      }
    }

    
  if (this.state.destroyerIa.includes(positionShoot)) {

    if (this.state.destroyerIa.includes(positionShoot)) {
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché"
      })
    } else if (this.state.cruiserIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché"
      })
    } else if (this.state.submarineIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché"
      })
    } else if (this.state.carrierIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché"
      })
    }
    else {
      this.setState({
        flopAray: [positionShoot, ...this.state.flopAray],
        message: "flop"
      })
    }
        // console.log(" destoyer touch haha",destroyerTouch,"destroyer state IA" ,this.state.destroyerIa);
    // console.log("X = ", i, "Y = ", j)
  }}

  changePosition() {
    console.log("Turn")
    this.setState({ turn: "Vertical" })

    if ( this.state.turn === "Vertical" ){
      this.setState({turn: "Horizontal"})
    }
  }

  shootIa(i,j) {
    console.log(" position des shoot iA",i,j);
    let positionShootIa = `${i}${j}`
    // condition 
    if (this.state.destroyer.includes(positionShootIa)) {

      this.setState({
        touchArrayIa: [positionShootIa, ...this.state.touchArrayIa],
        message: "touché"
      })
    } else if (this.state.cruiser.includes(positionShootIa)) {
      console.log("touché");
      this.setState({
        touchArrayIa: [positionShootIa, ...this.state.touchArrayIa],
        message: "touché"
      })
    } else if (this.state.submarine.includes(positionShootIa)) {
      console.log("touché");
      this.setState({
        touchArrayIa: [positionShootIa, ...this.state.touchArrayIa],
        message: "touché"
      })
    } else if (this.state.carrier.includes(positionShootIa)) {
      console.log("touché");
      this.setState({
        touchArrayIa: [positionShootIa, ...this.state.touchArrayIa],
        message: "touché"
      })
    }
    else {
      this.setState({
        flopAray: [positionShootIa, ...this.state.flopAray],
        message: "flop"
      })
    }
  }

  render() {
    // console.log("state toucharray", this.state.touchArray, "state destroyer", this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.cruiserIa);
    return (
      <>
        <img className="logo-site" src={LogoSite} alt="Battleship" />
        <div className="content">
           
          <div className="game">

            <div className="grid">
              <Score 
                
                scorePlayer = {this.state.fleetPlayer}
                typeofPlayer="Player"
                 />
              <Grid
                carrier={this.state.carrier}
                submarine={this.state.submarine}
                cruiser={this.state.cruiser}
                destroyer={this.state.destroyer}
                updateBoatPosition={this.updateBoatPosition}
                touchArray={this.state.touchArrayIa}
                flopAray={[]}
                shootIa={this.shootIa}
              />
            </div>

            <div className="infos">
              <div className="">
                <Message
                  message={this.state.message}
                />
                <ButtonStart
                  onclick={this.chooseIa}
                />
              </div>
              <div className="mt-4">
                <ButtonShips 
                  text="destroyer" 
                  image={ButtonShip2} 
                  onClick={this.handleChooseShip} 
                />
                <ButtonShips 
                  text="cruiser" 
                  image={ButtonShip3}  
                  onClick={this.handleChooseShip} 
                />
                <ButtonShips 
                  text="submarine" 
                  image={ButtonShip4} 
                  onClick={this.handleChooseShip} 
                />
                <ButtonShips 
                  text="carrier" 
                  image={ButtonShip5}  
                  onClick={this.handleChooseShip} 
                />
                <button 
                  className="rotate btn btn-light p-1 mt-2" 
                  onClick={this.changePosition}
                >
                  <img src={Rotate} alt="rotate ship" />
                </button>
              </div>  
            </div>

            <div className="grid">
              <Score 
                scoreIa={this.state.fleetIA}
                typeofPlayer="Computer" />
              <Grid
                carrier={this.state.carrierIa}
                submarine={this.state.submarineIa}
                cruiser={this.state.cruiserIa}
                destroyer={this.state.destroyerIa}
                updateBoatPosition={this.handleshoot}
                touchArray={this.state.touchArray}
                flopAray={this.state.flopAray}
              />
            </div>
              
          </div>

          <div className="sea"></div>
        </div>
      </>

    )
  }
} 


export default App;

