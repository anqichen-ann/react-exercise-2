import React from 'react';

const isMobilValid = value => /^1\d{10}$/.test(value);

class Form extends React.Component {
    state={
        name: '',
        mobile: '',
        error: {
            name: false,
            mobile: false
        },
        gender: ''
    }

    handleName= event => {
        this.setState({
            name: event.target.value
        })
    }

    handleMobile= event => {
        this.setState({
            mobile: event.target.value,
            error: {
                ...this.state.error,
                mobile: !isMobilValid(event.target.value)
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.name, this.state.mobile);
    }

    handleGender = event => {
            this.setState({
                gender: event.target.value
            })
    }


    render() {
        return <form onSubmit={this.handleSubmit}>
            <div>
                <label>name:</label>
                <input type='text' value={this.state.name} onChange={this.handleName}></input>
            </div>
            <div>
                <label>Mobile:</label>
                <input type='text' value={this.state.mobile} onChange={this.handleMobile}></input>
                </div>{this.state.error.mobile &&
                    <div >Please input valid mobile!</div>
                }
            <div>
            <label>Gender:</label>
            <select value={this.state.gender} onChange={this.handleGender}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            </div>
            <button 
                type='submit' 
                disabled={!this.state.name || !this.state.mobile || this.state.error.mobile}>
                Submit
            </button>
        </form>
    }
}
export default Form;