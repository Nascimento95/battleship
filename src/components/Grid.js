import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import explosion from'../assets/explosion.png'

class Grid
 extends React.Component {
    constructor(){
         super()
         
         this.state = {
            grid:[
                ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
                ["1","","","","","","","","","",""],
                ["2","","","","","","","","","",""],
                ["3","","","","","","","","","",""],
                ["4","","","","","","","","","",""],
                ["5","","","","","","","","","",""],
                ["6","","","","","","","","","",""],
                ["7","","","","","","","","","",""],
                ["9","","","","","","","","","",""],
                ["10","","","","","","","","","",""],
            ]

        } 
            
    }

    render() { 
       
        // ici les props passer dans grid dans app.js
        const { updateBoatPosition, destroyer, cruiser, submarine, carrier , touchArray, flopAray } = this.props
        // dans le maps nous avons 4 variable const (des ternaire) qui permette de vérifier si les coordonné d un bateau corresponde a la coordonné de la case cliquer et qui lui pase un background gris dans classname
        return (
            
            <div className="container-fluid" >
                {this.state.grid.map((row,i) => (  
                    <div key={i} className="row">
                        {row.map((col,j) => {
                            // les ternaires pour le backgroud de la case selectionner
                            const flopBoat = flopAray.includes(`${i}${j}`)
                            const touchBoat = touchArray.includes(`${i}${j}`) 
                            const carrierClass = carrier.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const submarineClass = submarine.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const destroyerClass = destroyer.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const cruiserClass = cruiser.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            return(
                                <div key={j} onClick={() => updateBoatPosition(i, j)}className={`col-1 py-2 ${destroyerClass} ${cruiserClass} ${submarineClass} ${carrierClass} border border-1`}>
                                    <div>
                                        {!touchBoat && !flopBoat && <h6>{col} </h6>}
                                        {touchBoat && <img src={explosion} alt="ship explosion" className="pr-3" style={{ maxWidth: "150%", height: "auto", verticalAlign: "center" }}/>}
                                        {flopBoat && <h6>X</h6>}
                                    </div>
                                </div>
                        )})}
                    </div>
                ))}
                
            </div>
        ) 
    }
}
 
export default Grid
;