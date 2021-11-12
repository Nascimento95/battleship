import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class ButtonShips extends Component {
    
    render() {
        const {text, image, onClick } = this.props
     
        return (
                <div
                shipname={text} 
                onClick={()=>onClick(text)}
                className="buttonShip"
                >
                <img src={image} alt="ship" />
                {text}
                </div>
            
        );
    }
}

export default ButtonShips;