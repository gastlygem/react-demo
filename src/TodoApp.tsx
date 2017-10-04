import * as React from "react";

import TodoList from "./TodoList";

export default class TodoApp extends React.Component<any, TodoAppState> {
  constructor(props: any) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(e: any) {
    this.setState({ text: e.target.value });
  }

  public handleSubmit(e: any) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.text,
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
    }));
  }

  public render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}
