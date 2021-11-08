import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class ButtonShips extends Component {
    // constructor() {
    //     super()
    //     this.state = [
    //         {
    //             name: 'carrier',
    //             length: 5,
    //         },
    //         {
    //             name: 'battleship',
    //             length: 4,
    //         },
    //         {
    //             name: 'cruiser',
    //             length: 3,
    //         },
    //         {
    //             name: 'submarine',
    //             length: 3,
    //         },
    //         {
    //             name: 'destroyer',
    //             length: 2,
    //         },
    //     ];
    // }

    render() {
        return (
            <div className="col-1">
                <h5 className="h6">Ships</h5>
                <div>
                    <button name="destroyer">Destroyer</button>
                    <button name="cruiser">Cruiser</button>
                    <button name="submarine">Submarine</button>
                    <button name="battleship">BattleShip</button>
                    <button name="carrier">Carrier</button>
                </div>
            </div>
        );
    }
}

export default ButtonShips;