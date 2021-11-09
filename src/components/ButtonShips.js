import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class ButtonShips extends Component {
    
    render() {
        
        const {text, onClick } = this.props
        return (
            <>
                <div shipname={text} onClick={()=>onClick(text)} className="btn btn-primary" >{text}</div>
            </>
        );
    }
}

export default ButtonShips;