import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        return (
            <img src={this.props.src}></img>
        )
    }
}

export default Avatar;