import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";
import ClearBtn from "./components/ClearBtn";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  handleInput = val => {
    this.setState({ input: this.state.input + val });
  };
  handleEqual = () => {
    const vall = this.state.input;
    const last = vall.charAt(vall.length - 1);
    if (isNaN(last)) {
      return null;
    }
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div>
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.handleInput}>7</Button>
            <Button handleClick={this.handleInput}>8</Button>
            <Button handleClick={this.handleInput}>9</Button>
            <Button handleClick={this.handleInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>4</Button>
            <Button handleClick={this.handleInput}>5</Button>
            <Button handleClick={this.handleInput}>6</Button>
            <Button handleClick={this.handleInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>1</Button>
            <Button handleClick={this.handleInput}>2</Button>
            <Button handleClick={this.handleInput}>3</Button>
            <Button handleClick={this.handleInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>.</Button>
            <Button handleClick={this.handleInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleInput}>-</Button>
          </div>
          <ClearBtn handleClear={() => this.setState({ input: "" })}></ClearBtn>
        </div>
      </div>
    );
  }
}

export default App;
