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
      this.setState({random: Math.floor(this.min + (Math.random() * (this.max - this.min))) });
     this.props.onclick()
    };
  
    render() {
  
      return (
        <div>
          <button 
            className="buttonStart" 
            onClick={this.handleClick} 
          >
            START
          </button>
        </div>
        
        );
      }
    }
    
  
  export default ButtonStart 


















 


 
    
  
    







 
