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
      const { onclick } = this.props
      return (
        <div className="col-1 d-flex justify-content-end">
            <div className="col-3">
          <button 
            className="btn btn-primary" 
            onClick={this.handleClick} 
            style={{ 
              background: "#7B2B19",
              border:"2px solid #FFFFFF",
              boxSizing: "border-box",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
            }} 
          >
            START
          </button>
          {this.state.random}
          </div>
          </div>
        
        );
      }
    }
    
  
  export default ButtonStart 


















 


 
    
  
    







 
