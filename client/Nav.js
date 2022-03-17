import React from "react";
import { connect } from "react-redux";

const Nav = ({ users, candy }) => {
  return (
    <nav>
      <a href="#users">Users {users.length}</a>
      <a href="#candy">Candy {candy.length}</a>
    </nav>
  );
};

export default connect((state) => state)(Nav);