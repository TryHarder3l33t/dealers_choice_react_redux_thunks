import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../store";

const Users = ({ users, destroy }) => {
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <li> {user.name}</li>
          <button onClick={() => destroy(user)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

const mapDispatch = (dispatch) => {
  return {
    destroy: (user) => {
      dispatch(deleteUser(user));
    },
  };
};

export default connect((state) => state, mapDispatch)(Users);
