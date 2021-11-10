import React, { Component } from 'react';

class Message extends Component {
    
    render() {
        const { message } = this.props
        return (
            <div>
                <p>{message} </p>
            </div>
        );
    }
}

export default Message;