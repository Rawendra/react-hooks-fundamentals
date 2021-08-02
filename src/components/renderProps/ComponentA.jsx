import React from "react";

export default class ComponentA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <span>DISPLAYING A</span>
        {this.props.counter}
        <button onClick={() => this.props.handleCount()}>CLICK</button>
      </div>
    );
  }
}
