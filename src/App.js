import React, {Component} from 'react';
import './App.css';
import Todos from './Todo.js';
import AddTodo from './AddTodo.js';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'CMSI 399: create TodoList'},
      {id: 2, content: 'MATH 132: study for quiz'}
    ]
  }
  deleteEvent =(id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addEvent = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className = "App">
        <h1 className = "App-header">
          Todo List 
        </h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteEvent} />
        <AddTodo className = "AddTodo" addTodo = {this.addEvent} />
      </div>
    );
  }
}
export default App;
