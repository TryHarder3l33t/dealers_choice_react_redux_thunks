import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getCandy } from "../store";
import Nav from "./Nav";
import Users from "./users";
import Candy from "./Candy";

class _App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <h2>Dealers Choice React Redux Thunks</h2>

        <Users />
        <Candy />
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
