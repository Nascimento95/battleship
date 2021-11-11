import React, { Component } from 'react';

class Score extends Component {

    render() {
        const { typeofPlayer, scorePlayer, scoreIa } = this.props 
        return (
            <div className="text-center pb-2">
                <h6>{typeofPlayer} : {typeofPlayer === "Player" ? `${scorePlayer}` : `${scoreIa}`}</h6>
            </div>
        );
    }
}

export default Score;





 