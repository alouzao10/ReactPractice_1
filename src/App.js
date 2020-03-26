import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import ToDo from './Components/ToDo';
import Header from './Components/Layout/Header';
import AddToDo from './Components/AddToDo';

import About from './Components/Pages/About';

import {v4 as uuidv4} from 'uuid';
import Axios from 'axios';

class App extends Component {
  //{id: uuidv4(), title: "Task 1", completed: false},
  //{id: uuidv4(), title: "Task 2", completed: false},
  //{id: uuidv4(), title: "Task 3", completed: false}
  state = {
    todoList: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      //console.log(response.data);
      this.setState({ todoList : response.data })
    });
  }

  // Toggle the task from the list...
  toggleTask = (id) => {
    // From here the state can be modified...
    //console.log("Hello App " + id);
    this.setState({todoList: this.state.todoList.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  removeTask = (id) => {
    //this.setState({ todoList: [...this.state.todoList.filter(todo => todo.id !== id)]})

    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
      this.setState({ todoList: [...this.state.todoList.filter(todo => todo.id !== id)]})
    });
  }

  // Fucntion for AddToDo
  addToDo = (title) => {
    //console.log(title);
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false
    }
    //this.setState({ todoList: [...this.state.todoList, newToDo]})

    Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false}).then(response => {
      this.setState({ todoList: [...this.state.todoList, response.data]})
    });
  }

  render(){
    //console.log(this.state.todoList);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>

            <Route path="/About" component={About}/>

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <ToDo list={this.state.todoList} toggleTask={this.toggleTask} removeTask={this.removeTask}/>
              </React.Fragment>
            )}/>

          </div>
        </div>
      </Router>
    );
  }
}


export default App;
