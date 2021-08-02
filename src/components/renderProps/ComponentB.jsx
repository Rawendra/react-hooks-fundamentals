import React from "react";

export default class ComponentB extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
        };
      }
    
      handleClick = () => {
        const { counter } = this.state;
        this.setState({ counter: counter });
      };
    
      render() {
        const { counter } = this.state;
    
        return (
          <div>
            {this.props.valueForB}
            <button onClick={this.props.handleClickForB}>CLICK BY B</button>
          </div>
        );
      }
}
