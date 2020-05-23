import React, { Component } from "react";
import "../App.css";
class Todo extends Component {
  render() {
    const completedItem = {
      textDecoration:"line-through",
      color:"orange",
      fontStyle:"italic"
    };
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleCompleted(this.props.item.id)}
        />
        <p style={this.props.item.completed?completedItem:null}>{this.props.item.text}</p>
      </div>
    );
  }
}
export default Todo;
