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
            <div className="text-center pb-2">
                <h4>{typeofPlayer} : {{typeofPlayer} === "Player" ? `${this.state.scorePlayer}` : `${this.state.scoreIA}`}</h4>
            </div>
        );
    }
}

export default Score;





 