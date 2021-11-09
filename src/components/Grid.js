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

     setBoat(i, j){
        console.log(i, j)
        // const array =  i + ship , j
     }

    render() { 
        console.log(this.props)
        const { boatposition } = this.props
        return (
            
            <div className="container-fluid mt-5 mx-5 ">
                {this.state.grid.map((row,i) => (  
                    <div key={i} className="row">
                        {row.map((col,j) => (
                        <div key={j} onClick={() => this.setBoat(i, j)}className="col-1 py-2  border border-1">
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