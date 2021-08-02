import React from "react";
import Dependency from "./Dependency";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
export default class DashBoard extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Dependency
          render={(count, incrementCount) => {
            return <ComponentA counter={count} handleCount={incrementCount} />;
          }}
        />

        <hr />
        <Dependency
          render={(count, doSomething) => (
            <ComponentB valueForB={count} handleClickForB={doSomething} />
          )}
        />
      </div>
    );
  }
}
