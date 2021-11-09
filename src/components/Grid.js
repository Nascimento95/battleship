import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
        const { updateBoatPosition, destroyer, cruiser, submarine, carrier } = this.props
        // dans le maps nous avons 4 variable const (des ternaire) qui permette de vérifier si les coordonné d un bateau corresponde a la coordonné de la case cliquer et qui lui pase un background gris dans classname
        return (
            
            <div className="container-fluid mt-5 mx-5">
                {this.state.grid.map((row,i) => (  
                    <div key={i} className="row">
                        {row.map((col,j) => {
                            // les ternaires pour le backgroud de la case selectionner
                            const carrierClass = carrier.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const submarineClass = submarine.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const destroyerClass = destroyer.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            const cruiserClass = cruiser.includes(`${i}${j}`) ? `bg-secondary`  : ""
                            return(
                                <div key={j} onClick={() => updateBoatPosition(i, j)}className={`col-1 py-2 ${destroyerClass} ${cruiserClass} ${submarineClass} ${carrierClass} border border-1`}>
                                    <div>
                                        <h6>{col}</h6>
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