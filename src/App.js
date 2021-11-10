import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Grid from './components/Grid';
import Score from './components/Score';
import Message from './components/Message';
import ButtonShips from './components/ButtonShips';
import ButtonStart from './components/ButtonStart';

import LogoSite from'./assets/Logo-site.png'
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
      touchArray:[],
      flopAray : [],
      message :""
    }

    this.handleChooseShip = this.handleChooseShip.bind(this)
    this.updateBoatPosition = this.updateBoatPosition.bind(this)
    this.chooseIa = this.chooseIa.bind(this)
    this.handleshoot  = this.handleshoot.bind(this)
    this.displayMessage = this.displayMessage.bind(this)
  }
  displayMessage(){

  }
  chooseIa(){
    let positionDestroyer = ["11"]
    let positionCruiser = ["31"]
    let positionSubmarine = ["46"]
    let positionCarrier = ["310"]
    // coordonée de destroyer
    for(var i = 0 ; i < 1 ; i++) {
      const split = positionDestroyer[i].split("")
      split[1] ++
      const newPosition = split.join("");
      positionDestroyer = [...positionDestroyer,newPosition]
    }
    // coordonée de cruiser
    for(var i =0 ; i < 2 ; i++){
      const split = positionCruiser[i].split("")
      split[1] ++
      const newPosition = split.join("");
      positionCruiser = [...positionCruiser,newPosition]
    }
    // coordonée de submarine
    for(var i =0 ; i < 3 ; i++){
      const split = positionSubmarine[i].split("")
      split[0] ++
      const newPosition = split.join("");
      positionSubmarine = [...positionSubmarine,newPosition]
    }
    // coordonée de carrier
    for(var i =0 ; i < 4 ; i++){
      const split = positionCarrier[i].split("")
      split[0] ++
      const newPosition = split.join("");
      positionCarrier = [...positionCarrier,newPosition]
    }

    this.setState({
      destroyerIa: positionDestroyer,
      cruiserIa: positionCruiser,
      submarineIa : positionSubmarine,
      carrierIa : positionCarrier
    })
     
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
    this.handleshoot(i,j)
  }

  handleshoot (i,j){
    // let boatDead = this.state.destroyerIa.includes(this.state.touchArray)
    // let bot = JSON.stringify(this.state.destroyerIa) === JSON.stringify(this.state.touchArray)
    // console.log("bateau exploser",bot);
    let stateDestroyerIa = this.state.destroyerIa
    let stateTouchArray = this.state.touchArray
    console.log("state destroyeru",stateDestroyerIa ,"state toucharray", stateTouchArray);
    if(JSON.stringify(stateDestroyerIa) === JSON.stringify(stateTouchArray)){
      console.log("bateau exploser");
    }



    let positionShoot = `${i}${j}`
    if(this.state.destroyerIa.includes(positionShoot)){
      
      this.setState({
        touchArray:[positionShoot, ...this.state.touchArray],
        message : "touché"
      })
    }else if (this.state.cruiserIa.includes(positionShoot)){
      console.log("touché");
      this.setState({
        touchArray:[positionShoot, ...this.state.touchArray],
        message : "touché"
      })
    }else if (this.state.submarineIa.includes(positionShoot)){
      console.log("touché");
      this.setState({
        touchArray:[positionShoot, ...this.state.touchArray],
        message : "touché"
      })
    }else if (this.state.carrierIa.includes(positionShoot)){
      console.log("touché");
      this.setState({
        touchArray:[positionShoot, ...this.state.touchArray],
        message : "touché"
      })
    }
    else{
      this.setState({
        flopAray:[positionShoot, ...this.state.flopAray],
        message : "flop"
      })
    }

   
    // console.log("X = ", i, "Y = ", j)
  }

  render() {
    console.log("state toucharray",this.state.touchArray,"state destroyer", this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.cruiserIa);
    return (
      <>
        <img className="logo-site" src={LogoSite} alt="Battleship" />
        <div className="content"> 
          <div className="row justify-content-between mt-5 pb-5"> 
            <div className="col-5 ms-4">
              <Score typeofPlayer="Player" />
              <Grid  
                carrier={this.state.carrier}
                submarine={this.state.submarine}
                cruiser={this.state.cruiser} 
                destroyer={this.state.destroyer} 
                updateBoatPosition={this.updateBoatPosition}
                touchArray={[]} 
                flopAray={[]}
                
              />
            </div>
            <div className="col-1">
              <Message 
              message={this.state.message}
              />
              <ButtonStart 
              onclick={this.chooseIa} 
              />
              <div className="mt-4">
              <ButtonShips text="destroyer" onClick={this.handleChooseShip} />
              <ButtonShips text="cruiser" onClick={this.handleChooseShip} />
              <ButtonShips text="submarine" onClick={this.handleChooseShip} />
              <ButtonShips text="carrier" onClick={this.handleChooseShip} />
              </div>
            </div>
            
            <div className="col-5">
              <Score typeofPlayer="Computer"/>
              <Grid 
              carrier={this.state.carrierIa}
              submarine={this.state.submarineIa}
              cruiser={this.state.cruiserIa} 
              destroyer={this.state.destroyerIa} 
              updateBoatPosition={this.updateBoatPosition}
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

