import React, { Component } from "react";
import ReactDOM from "react-dom";

class CommandCenter extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
        <button>Scooby Doo</button>
        <button>Recipes</button>
      </form>
    );
  }
}

export default CommandCenter;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<CommandCenter />, wrapper) : false;