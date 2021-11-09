import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class ButtonShips extends Component {
    render() {
        return (
            <>
                <div name="destroyer" className="btn btn-primary">Destroyer</div>
                <div name="cruiser" className="btn btn-primary">Cruiser</div>
                <div name="submarine" className="btn btn-primary">Submarine</div>
                <div name="carrier" className="btn btn-primary">Aircraft Carrier</div>
            </>
        );
    }
}

export default ButtonShips;