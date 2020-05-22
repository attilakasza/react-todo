import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {

  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    todo.complete = false;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 className="title__fill">
            To
            <span className="title_border">
              do
            </span>
          </h1>
        </div>
        <div className="todo">
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
        <footer>
          <a href="https://attilakasza.com/" title="Attila Kasza" target="_blank" rel="noopener noreferrer">
            Attila Kasza
          </a>&thinsp;
          © 2019
        </footer>
      </div>
    );
  }
}

export default App;