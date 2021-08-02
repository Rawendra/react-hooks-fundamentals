import React from "react";
import Example from "./Example";
import ExampleOnIntervalTimer from "./components/useEffects/ExampleOnIntervalTimer";
import ExampleOnDataFetching from './components/dataFetching/ExampleOnDataFetching'
import ExampleOnMouseCursor from "./components/useEffects/ExampleOnMouseCursor";
//import DashBoard from './components/useContext/hooks/DashBoard'
import ExampleOnUseReducerObj from './components/useReducers/ExampleOnUseReducerObj'
import DashBoard from './components/renderProps/DashBoard'
import Home2 from './components/Home/Home2'
import Home3 from './components/Home/Home3'
import DashBoard2 from './components/renderPropsRevisited/DashBoard'
import ExampleOnRef from './components/useRef/ExampleOnRef'
export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ExampleOnRef />
    );
  }
}
