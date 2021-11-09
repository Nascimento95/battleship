import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class ButtonShips extends Component {
    //     constructor (){
    //         super()

    //         this.state = {
    //             destroyer: 2,
    //             cruiser: 3,
    //             submarine: 4,
    //             carrier: 5
    //         }
            
    //         this.chooseShip = this.handleChooseShip.bind(this)
    //     }

    // handleChooseShip(e) {
    //     console.log(e)
    // }


    render() {
        console.log(this.state)
        const {text, onClick } = this.props
        return (
            <>
                <div shipname="destroyer" onClick={()=>onClick(text)} className="btn btn-primary" >{text}</div>
                {/* <div shipname="cruiser" className="btn btn-primary" onClick={()=> this.handleChooseShip(this.state.cruiser)}>Cruiser</div>
                <div shipname="submarine" className="btn btn-primary" onClick={()=> this.handleChooseShip(this.state.submarine)}>Submarine</div>
                <div shipname="carrier" className="btn btn-primary" onClick={()=> this.handleChooseShip(this.state.carrier)}>Aircraft Carrier</div> */}
            </>
        );
    }
}

export default ButtonShips;