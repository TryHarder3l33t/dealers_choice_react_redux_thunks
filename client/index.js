import React, { Component } from "react";
import axios from "axios";
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
        <h2>Hello From The Component</h2>
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
        const users = (await axios.get("/api/users")).data;
        const candy = (await axios.get("/api/candy")).data;
        console.log(`This is the axios call ${JSON.stringify(users)}`);
        console.log(users);
        dispatch(getUsers(users));
        dispatch(getCandy(candy));
      },
    };
  }
)(_App);

export default App;
