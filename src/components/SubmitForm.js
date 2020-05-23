import React, { Component } from "react";
import "../App.css"
class SubmitForm extends Component {
  state={todo_item:""}
    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.todo_item===""){
            return
        }
        else{
            this.props.onSubmitForm(Date.now(),this.state.todo_item,false)
            this.setState({todo_item:""})
        }
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="submitInput"
            type="text"
            placeholder="enter your task"
            name="todo"
            value={this.state.todo_item}
            onChange={(event) =>
              this.setState({ todo_item: event.target.value })
            }
          />
          <button className="ui orange basic button">submit</button>
        </form>
      </div>
    );
  }
}
export default SubmitForm;
