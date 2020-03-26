import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    // A method to check a value in props to assign styling
    getStyle = () => {
        /*if(this.props.item.completed){
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }*/

        return{
            // turnary operator to simplify code...
            padding: '10px',
            background: '#f4f4f4',
            borderBottom: '1px black dotted',
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
            //backgroundColor: this.props.item.completed ? 'yellow' : 'red'
        }

    }

    /*toggleTask = (e) => {
        console.log(this.props);
    }*/

    render() {
        const { id, title } = this.props.item;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.toggleTask.bind(this, id)}></input>
                    {title}
                    <button style={btnStyle} onClick={this.props.removeTask.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// Prop Types for data type to pass
ToDoItem.propTypes = {
    list: PropTypes.object
}

// A way to apply style
const itemStyle = {
    backgroundColor: 'red'
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '15%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
