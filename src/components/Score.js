import React, { Component } from 'react';

class Score extends Component {

    render() {
        const { typeofPlayer, fleet } = this.props 
        return (
            <div className="text-center pb-2">
                <h6>{typeofPlayer} : {fleet}</h6>
            </div>
        );
    }
}

export default Score;





 