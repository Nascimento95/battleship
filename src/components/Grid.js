import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Grid
 extends React.Component {
     constructor(){
         super()
         this.state = {
            grid:[ 
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            
            ]
        }
            
     }
    render() { 
        return (
            
            <div className="container-fluid mt-5 mx-5 ">
                {this.state.grid.map((row,i) => (  
                    <div key={i} className="row">
                        {this.state.grid.map((col,j) => (
                        <div key={j} className="col-1  border border-1">
                            <div>
                                <h6> 1</h6>
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