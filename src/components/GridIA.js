import React, { Component } from 'react';

class GridIA extends Component {
    constructor(){
        super()
        
        this.state = {
           gridIA:[
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
            {this.state.gridIA.map((row,i) => (  
                <div key={i} className="row">
                    {row.map((col,j) => {
                        return(
                            <div key={j} className="col-1 py-1 border border-1">
                                <div>
                                    <h6>{col}</h6>
                                </div>
                            </div>
                    )})}
                </div>
            ))}
            </div>
        );
    }
}

export default GridIA;