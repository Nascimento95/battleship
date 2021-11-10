import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class ButtonStart  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        random: null,
        col: [],
      }
    }
  
    min = 1;
    max = 100;
  
    handleClick = () => {
      this.setState({random: this.min + (Math.random() * (this.max - this.min))});
    };
  
    render() {
      return (
        <div className="col-7 d-flex justify-content-end">
            <div className="col-3">
          <button className="btn btn-primary"onClick={this.handleClick }>START</button>
          {this.state.random}
          </div>
          </div>
        
        );
      }
    }
    // vvvvvvvvvv
  
  export default ButtonStart 


















 


 
    
  
    







 
