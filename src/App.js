import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Dinner With Husband",
        completed: false
      }
    ]
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <hr />
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
