import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDo extends Component {

    /*toggleTask = () => {
        console.log("Hello ToDo");
    }*/

    render(){
        //console.log(this.props.list);
        //return (
        //<div>
        //    ToDo List...
        //</div>
        //);
        return this.props.list.map((todo) => (            
            <ToDoItem key={todo.id} item={todo} toggleTask={this.props.toggleTask} removeTask={this.props.removeTask}/>
        ));
    }
}

// Prop Types for data type to pass
ToDo.propTypes = {
    list: PropTypes.array.isRequired,
    toggleTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired
}

export default ToDo;
