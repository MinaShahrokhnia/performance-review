import React, { Component } from 'react';

class PersonalInformation extends Component {
    constructor() {
        super();
        this.state = {
            reviewerName: '',
            name: '',
            date: ''
        }
    }

    changeName = ( event ) => {
        const value = event.target.value;
        this.setState({ reviewerName: value });
    }

    render() {
        return(
            <form>
                <input type="text" className='reviwer-name'
                onChange={this.changeName}
                value={this.state.reviewerName}/>
                <input type="text"/>
                <input type="date"/>
            </form>
        )
    }
}
export default PersonalInformation;