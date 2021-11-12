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
import Sea from'./assets/sea.svg'


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
      flopArayIa: [],
      message: "Positonner votre flotte et cliquer sur Start",
      turn: "Orizontal",
      fleetPlayer: 4,
      fleetIA: 4,
      scorePlayer: 0,
      scoreIA: 0,
      gridHover: "false",
      amIPLaying: true
    }

    this.handleChooseShip = this.handleChooseShip.bind(this)
    this.updateBoatPosition = this.updateBoatPosition.bind(this)
    this.chooseIa = this.chooseIa.bind(this)
    this.handleshoot = this.handleshoot.bind(this)
    this.changePosition = this.changePosition.bind(this)
    this.shootIa = this.shootIa.bind(this)
    this.reset = this.reset.bind(this)
    // this.gameOver = this.gameOver.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.amIPLaying) {
      this.shootIa()
    }
  }

  // gameOver() {
  //   if (this.state.fleetIA === 0) {
  //     this.setState({
  //       message: "You win !"
  //     })
  //   } else if (this.state.fleetPlayer === 0) {
  //     this.setState({
  //       message: "Game over, you loose !"
  //     })
  //   }
  // }

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
      carrierIa: positionCarrier,
      message: "Tirer sur l'ennemi",
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
    let botIa = 4


    for(let i = 0 ; i < this.state.destroyerIa.length ; i++){
      let isTouch = [positionShoot, ...this.state.touchArray].includes(this.state.destroyerIa[i])
       if (isTouch) {
           destroyerTouch= [this.state.destroyerIa, ...destroyerTouch]
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
    // console.log("destroyer", destroyerTouch)
    // console.log("destroyerIA", this.state.destroyerIa)

    if (this.state.destroyerIa.includes(positionShoot)) {
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché !",
        amIPLaying: false
      })
        if (destroyerTouch.length === this.state.destroyerIa.length) {
        this.setState({
          message: "torpilleur coulé",
          fleetIA: this.state.fleetIA - 1,  
          amIPLaying: false
        })
      }

    } else if (this.state.cruiserIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché !",
        amIPLaying: false
      })   
        if(cruiserTouch.length === this.state.cruiserIa.length){
        this.setState({
          message: "croiseur coulé",
          fleetIA: this.state.fleetIA - 1,
          amIPLaying: false
        })
      }

    } else if (this.state.submarineIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché !",
        amIPLaying: false
      })
      if(submarineTouch.length === this.state.submarineIa.length){
        this.setState({
          message: "sous-marin coulé",
          fleetIA: this.state.fleetIA - 1,
          amIPLaying: false
        })
        
      }

    } else if (this.state.carrierIa.includes(positionShoot)) {
      console.log("touché");
      this.setState({
        touchArray: [positionShoot, ...this.state.touchArray],
        message: "touché !",
        amIPLaying: false
      })
      if(carrierTouch.length === this.state.carrierIa.length){
        this.setState({
          message: "porte-avion coulé !",
          fleetIA: this.state.fleetIA -1,
          amIPLaying: false
        })
        
      }

    } else {
      this.setState({
        flopAray: [positionShoot, ...this.state.flopAray],
        message: "flop !",
        amIPLaying: false
      })
    }
        // console.log(" destoyer touch haha",destroyerTouch,"destroyer state IA" ,this.state.destroyerIa);
    // console.log("X = ", i, "Y = ", j)

    if (this.state.fleetIA === 0) {
      this.setState({
        message: "Gagné ! Tu veux rejouer ? Clique sur reset _" 
      })
    } else if (this.state.fleetPlayer === 0) {
      this.setState({
        message: "Tu as perdu !"
      })
    }
    console.log("flotteIA",this.state.fleetIA)
    console.log("botIA", botIa)
  }

  changePosition() {
    console.log("Turn")
    this.setState({ turn: "Vertical" })

    if ( this.state.turn === "Vertical" ){
      this.setState({turn: "Horizontal"})
    }
  }

  shootIa(){
    let min = 1
    let max = 10
    let destroyerTouchIa = []
    let cruiserTouchIa = []
    let submarineTouchIa = []
    let carrierTouchIa = []
    // let positionShootIa = `${i}${j}`
    let tirI = Math.floor(min + (Math.random() * (max - min))) ;
    let tirJ = Math.floor(min + (Math.random() * (max - min)));
    let positionShootIa = `${tirI}${tirJ}`
    const { destroyer, cruiser, submarine, carrier, touchArrayIa, flopArayIa } = this.state

    for(let i = 0 ; i < this.state.destroyer.length ; i++){
      let isTouch = [positionShootIa, ...this.state.touchArray].includes(this.state.destroyer[i])
       if (isTouch) {
           destroyerTouchIa= [this.state.destroyer, ...destroyerTouchIa]
       }
    } 
    
    for(let i = 0 ; i < this.state.cruiser.length ; i++){
    let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.cruiser[i])
     if(isTouch){
      cruiserTouchIa= [this.state.cruiser[i], ...cruiserTouchIa]
      }
    } 

    for(let i = 0 ; i < this.state.submarine.length ; i++){
      let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.submarine[i])
        if(isTouch){
          submarineTouchIa= [this.state.submarine[i], ...submarineTouchIa]
        }
    } 
    
    for(let i = 0 ; i < this.state.carrier.length ; i++){
      let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.carrier[i])
        if(isTouch){
          carrierTouchIa= [this.state.carrier[i], ...carrierTouchIa]
        }
    }


    if(destroyer.length !== 0 && cruiser.length !== 0 && submarine.length !== 0 && carrier.length !== 0) {
      // console.log(" position des shoot iA",i,j);
      // let positionShootIa = `${i}${j}`
      // condition 
      if (destroyer.includes(positionShootIa)) {
        this.setState({
          touchArrayIa: [positionShootIa, ...touchArrayIa],
          message: "touché !"
        })
          if (destroyerTouchIa.length === this.state.destroyer.length) {
            this.setState({
              message: "destroyer joueur coulé",
              fleetPlayer: this.state.fleetPlayer - 1,  
              amIPLaying:true
            })
          }
      } else if (cruiser.includes(positionShootIa)) {
        // console.log("touché");
        this.setState({
          touchArrayIa: [positionShootIa, ...touchArrayIa],
          message: "touché !"
        })
          if(cruiserTouchIa.length === this.state.cruiser.length){
                this.setState({
                  message: "croiseur joueur coulé",
                  fleetPlayer: this.state.fleetPlayer - 1,
                  amIPLaying: true
                })
          }      
      } else if (submarine.includes(positionShootIa)) {
        // console.log("touché");
        this.setState({
          touchArrayIa: [positionShootIa, ...touchArrayIa],
          message: "touché !"
        })
          if(submarineTouchIa.length === this.state.submarine.length){
                this.setState({
                  message: "sous-marin coulé",
                  fleetPlayer: this.state.fleetPlayer - 1,
                  amIPLaying: true
                })
          } 

      } else if (carrier.includes(positionShootIa)) {
        console.log("touché");
        this.setState({
          touchArrayIa: [positionShootIa, ...touchArrayIa],
          message: "touché !"
        })
          if(carrierTouchIa.length === this.state.carrier.length){
                this.setState({
                  message: "porte-avion joueur coulé !",
                  fleetPlayer: this.state.fleetPlayer -1,
                  amIPLaying: true
                })
          }
      }
      else {
        this.setState({
          flopArayIa: [positionShootIa, ...flopArayIa],
          message: "flop !",
          amIPLaying : true
        })
      }
    }

    // for(let i = 0 ; i < this.state.destroyer.length ; i++){
    //   let isTouch = [positionShootIa, ...this.state.touchArray].includes(this.state.destroyer[i])
    //    if (isTouch) {
    //        destroyerTouchIa= [this.state.destroyer, ...destroyerTouchIa]
    //    }
    // } 
    
    // for(let i = 0 ; i < this.state.cruiser.length ; i++){
    // let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.cruiser[i])
    //  if(isTouch){
    //   cruiserTouchIa= [this.state.cruiser[i], ...cruiserTouchIa]
    //   }
    // } 

    // for(let i = 0 ; i < this.state.submarine.length ; i++){
    //   let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.submarine[i])
    //     if(isTouch){
    //       submarineTouchIa= [this.state.submarine[i], ...submarineTouchIa]
    //     }
    // } 
    
    // for(let i = 0 ; i < this.state.carrier.length ; i++){
    //   let isTouch = [positionShootIa, ...this.state.touchArrayIa].includes(this.state.carrier[i])
    //     if(isTouch){
    //       carrierTouchIa= [this.state.carrier[i], ...carrierTouchIa]
    //     }
    // }
    console.log("log de la flotte du player",this.state.fleetPlayer);
    console.log("log du desctroyer touch",destroyerTouchIa);
      //  conpare le tableau des tir toucher de lia avec la valeur des tableau du joueur
    // if (this.state.destroyer.includes(positionShoot)) {
    //   this.setState({
    //     touchArray: [positionShoot, ...this.state.touchArray],
    //     message: "touché !",
    //     amIPLaying: false
    //   })
    //     if (destroyerTouch.length === this.state.destroyerIa.length) {
    //     this.setState({
    //       message: "torpilleur coulé",
    //       fleetIA: this.state.fleetIA - 1,  
    //       amIPLaying: false
    //     })
    //   }

    // } else if (this.state.cruiserIa.includes(positionShoot)) {
    //   console.log("touché");
    //   this.setState({
    //     touchArray: [positionShoot, ...this.state.touchArray],
    //     message: "touché !",
    //     amIPLaying: false
    //   })   
    //     if(cruiserTouch.length === this.state.cruiserIa.length){
    //     this.setState({
    //       message: "croiseur coulé",
    //       fleetIA: this.state.fleetIA - 1,
    //       amIPLaying: false
    //     })
    //   }

    // } else if (this.state.submarineIa.includes(positionShoot)) {
    //   console.log("touché");
    //   this.setState({
    //     touchArray: [positionShoot, ...this.state.touchArray],
    //     message: "touché !",
    //     amIPLaying: false
    //   })
    //   if(submarineTouch.length === this.state.submarineIa.length){
    //     this.setState({
    //       message: "sous-marin coulé",
    //       fleetIA: this.state.fleetIA - 1,
    //       amIPLaying: false
    //     })
        
    //   }

    // } else if (this.state.carrierIa.includes(positionShoot)) {
    //   console.log("touché");
    //   this.setState({
    //     touchArray: [positionShoot, ...this.state.touchArray],
    //     message: "touché !",
    //     amIPLaying: false
    //   })
    //   if(carrierTouch.length === this.state.carrierIa.length){
    //     this.setState({
    //       message: "porte-avion coulé !",
    //       fleetIA: this.state.fleetIA -1,
    //       amIPLaying: false
    //     })
        
    //   }

    // } else {
    //   this.setState({
    //     flopAray: [positionShoot, ...this.state.flopAray],
    //     message: "flop !",
    //     amIPLaying: false
    //   })
    // }

  }

  reset() {
    this.setState({
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
      message: "Positonner votre flotte et cliquer sur Start",
      turn: "Orizontal",
      fleetPlayer: 4,
      fleetIA: 4,
      amIPLaying: true
    })
  }

  render() {
    // console.log("state toucharray", this.state.touchArray, "state destroyer", this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.destroyerIa);
    // console.log("destroyeru iA",this.state.cruiserIa);
    console.log("touch",this.state.touchArrayIa,"flop ia",this.state.flopArayIa);
    return (
      <>
        <img className="logo-site" src={LogoSite} alt="Battleship" />
        <div className="content">
           
          <div className="game">

            <div>
              <Score 
                scorePlayer = {this.state.fleetPlayer}
                typeofPlayer="Votre flotte"
                 />
              <Grid
                carrier={this.state.carrier}
                submarine={this.state.submarine}
                cruiser={this.state.cruiser}
                destroyer={this.state.destroyer}
                updateBoatPosition={this.updateBoatPosition}
                touchArray={this.state.touchArrayIa}
                flopAray={this.state.flopArayIa}
                shootIa={this.shootIa}
              />
            </div>

            <div className="infos">
              <div>
                <Message
                  message={this.state.message}
                />
                <div className="buttons">
                  <ButtonStart
                    onclick={this.chooseIa}
                  />
                  <button 
                    className="buttonReset"
                    onClick={this.reset} 
                  >
                    RESET
                  </button>
                </div>
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

            <div>
              <Score 
                scoreIa={this.state.fleetIA}
                typeofPlayer="Flotte de l'ennemi" />
              <Grid
                carrier={this.state.carrierIa}
                submarine={this.state.submarineIa}
                cruiser={this.state.cruiserIa}
                destroyer={this.state.destroyerIa}
                updateBoatPosition={this.handleshoot} 
                touchArray={this.state.touchArray}
                flopAray={this.state.flopAray}
                shootIa={() => {}}
              />
            </div>
              
          </div>
         
          {this.state.message === "Gagné ! Tu veux rejouer ? Clique sur reset _" ? 
            <div className="seaAnimation">
             <img src={Sea} alt="sea"/>
            </div>
            : 
            <div className="sea">
              <img src={Sea} alt="sea"/>
            </div>}
  
        </div>

      </>

    )
  }
} 


export default App;

