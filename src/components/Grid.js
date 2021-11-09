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
        return (
            
            <div className="container-fluid" >
                {this.state.grid.map((row,i) => (  
                    <div key={i} className="row">
                        {row.map((col,j) => (
                        <div key={j} className="col-1 py-2 border border-1">
                            <div>
                                <h6>{col}</h6>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
                
            </div>
        ) 
    }
}
 
export default Grid
;