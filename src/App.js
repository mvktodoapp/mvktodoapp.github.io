import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import SubmitForm from "./components/SubmitForm";
class App extends Component {
  constructor() {
    super();
    //initial state  
    this.state = {
      todos: []
    };
    // should bind for setState method
    this.addItems = this.addItems.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }
  // method to handle completed tasks 
   handleCompleted(id) {
      //map returns new array with out mutating existing array
     const todo_items = this.state.todos.map((item) => {
       if (item.id === id) {
         return Object.assign({}, item, {
           completed: !item.completed
         });
       } else {
         return item;
       }
     });
     // new updated todo items 
     this.setState({
       todos: todo_items
     });
   }

  // adding new tasks 
  addItems(id, text, completed) {
      const submittedTask = { id: id, text: text, completed: completed };
      this.setState({ todos: [...this.state.todos, submittedTask] });
      console.log(this.state.todos)
   }

  render() {
  
     const completedTasks = this.state.todos.filter((item) => item.completed)
       .length;
      const todoItems = this.state.todos.map((item) => (
        <Todo key={item.id} handleCompleted={this.handleCompleted} item={item} />
     ));
    return (
      <div className="todo-list">
        <h4>
          <span style={{ color: "orange", fontSize: "30px" }}>
            {completedTasks}
          </span>{" "}
          tasks completed
        </h4>
        {todoItems}
        <br />
        <SubmitForm onSubmitForm={this.addItems} />
      </div>
    );
  }
}
export default App;
