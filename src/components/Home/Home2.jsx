import React from "react";
import axios from "axios";

export default class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      users:[]
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({users:response.data})
    });
  }

  handleIncrement = (e) => {
    const { value } = this.state;
    console.log(e);
    this.setState({ value: value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.value}
        <span>Home </span>
        <button
          onClick={(e) => {
            this.handleIncrement(e);
          }}
        >
          Click
        </button>{" "}
      </React.Fragment>
    );
  }
}
