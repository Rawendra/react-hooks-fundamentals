import React from "react";

export default class Dependency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.handleIncrement)}</div>
    );
  }
}
