import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [
        { title: 'デフォルトTODO', id: 0 },
      ],
      uniqueId: 1,
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }
  
  resetTodo() {
    this.setState({
      tasks: [],
    });
  }
  
  addTodo(title) {
    const task = {
      title: title,
      id: this.state.uniqueId,
    }
    
    const newTasks = this.state.tasks.concat(task)
    this.setState({
      tasks: newTasks,
      uniqueId: this.state.uniqueId + 1
    });
  }
  
  render() {
    
    return (
      <div>
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
