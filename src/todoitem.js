import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }
  render() {
    return (
      <div className="todo-item">
        <button type="submit">Delete</button>
        <input
          onClick={() => this.setState({ done: !this.state.done })}
          type="checkbox"
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
      </div>
    );
  }
}
