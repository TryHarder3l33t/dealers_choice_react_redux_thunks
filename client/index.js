import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getCandy } from "../store";
import Nav from "./Nav";
import Users from "./Users";
import Candy from "./Candy";
// //TODO
// import TheForm from "./Form";

class _App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Users />
        <Candy />
        {/* <TheForm /> */}
      </div>
    );
  }
}

const App = connect(
  (state) => state,
  (dispatch) => {
    return {
      init: async () => {
        dispatch(getUsers());
        dispatch(getCandy());
      },
    };
  }
)(_App);

export default App;
