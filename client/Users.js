import React from "react";
import { connect } from "react-redux";

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default connect((state) => state)(Users);
