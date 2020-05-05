import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleButtonClick = (event) => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <p>Test {this.state.count}</p>
        <button onClick={this.handleButtonClick}> increase </button>
      </div>
    );
  }
}
