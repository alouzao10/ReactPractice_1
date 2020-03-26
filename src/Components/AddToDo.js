import React, { Component } from 'react'

export class AddToDo extends Component {

    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value}); // Only changes this state and not the state of App.js
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
        <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder="Add ToDo..." style={{ flex: '10', padding: '5px' }} 
            value={this.state.value} onChange={this.onChange}/> 
            <input type="submit" value="Submit" className="btn" style={{ flex: '1'}}/>
        </form>
        )
    }
}

export default AddToDo
