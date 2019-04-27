import React, { Component } from 'react';

class PersonalInformation extends Component {
    constructor(){
        super();
        this.state = {
            reviewerName:''
        }
    }
    render() {
        return(
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="date"/>
            </form>
        )
    }
}
export default PersonalInformation;