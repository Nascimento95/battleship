import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()

        this.state = {
            shotResult: "Hit",
        }
    }

    render() {
        return (
            <div>
                {this.state.shotResult ==="Hit" && <p>Touch !</p>}
                {this.state.shotResult ==="None" && <p>Bloup !</p>}
                {this.state.shotResult ==="Sunk" && <p>Touch and sunk !</p>}
            </div>
        );
    }
}

export default Message;