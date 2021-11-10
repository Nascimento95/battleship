import React, { Component } from 'react';

class Score extends Component {
    constructor() {
        super()
    
        this.state = {
            fleetPlayer: 5,
            fleetIA: 5,
            scorePlayer: 0,
            scoreIA: 0,
        }
    
    }
   
    gameOver() {
        if (this.state.fleetPlayer === 0) {
            this.setState({scoreIA: this.state.scoreIA + 1}) 
        }
        if (this.state.fleetIA === 0) {
            this.setState({scorePlayer: this.state.scorePlayer + 1}) 
        }
        
    }


    render() {
        const { typeofPlayer } = this.props 
        return (
            <div className="d-flex">
                {typeofPlayer} : {typeofPlayer === "Player" ? (<p>&nbsp;{this.state.scorePlayer}</p>) : (<p>&nbsp;{this.state.scoreIA}</p>)}
            </div>
        );
    }
}

export default Score;





 