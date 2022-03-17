import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import logger from "redux-logger";

const usersReducer = (state = [], action) => {
  if (action.type === "GET_USERS") {
    state = action.users;
  }

  if (action.type === "DESTROY_TASK") {
    const users = state.filter((user) => user.id !== action.user.id);
    return users;
  }
  return state;
};
const candyReducer = (state = [], action) => {
  if (action.type === "GET_CANDY") {
    state = action.candy;
  }
  return state;
};

const reducer = combineReducers({
  users: usersReducer,
  candy: candyReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

const _getUsers = (users) => {
  return {
    type: "GET_USERS",
    users,
  };
};

const getUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
    dispatch(_getUsers(users));
  };
};

const _getCandy = (candy) => {
  return {
    type: "GET_CANDY",
    candy,
  };
};

const getCandy = () => {
  return async (dispatch) => {
    const candy = (await axios.get("/api/candy")).data;
    dispatch(_getCandy(candy));
  };
};

const deleteUser = (user) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${user.id}`);
    dispatch({ type: "DESTROY_TASK", user });
  };
};

export default store;
//Named export
export { getUsers, getCandy, deleteUser };

// //TODO
// const formChange = (onChange) => {
//   return (dispatch) => {
//     const target = onChange.target;
//     const value = target.value;
//     const name = target.name;
//     const data = { [name]: value };

//     dispatch(_formChange(data));
//   };
// };

// //TODO
// const _formChange = (data) => {
//   return {
//     type: "FORM_CHANGE",
//     data,
//   };
// };

//     //TODO
//   if (action.type === "FORM_CAHNGE") {
//     const change = [...state, action.data];
//     return change;
//   }
