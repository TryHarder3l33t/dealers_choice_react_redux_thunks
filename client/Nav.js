import React from "react";
import { connect } from "react-redux";

const Nav = ({ users, candy }) => {
  return (
    <nav>
      <p>Users {users.length}</p>
      <p>Candy {candy.length}</p>
    </nav>
  );
};

export default connect((state) => state)(Nav);
