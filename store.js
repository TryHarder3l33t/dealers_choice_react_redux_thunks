import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import logger from "redux-logger";

const usersReducer = (state = [], action) => {
  if (action.type === "GET_USERS") {
    console.log(`This is the store ${action.users}`);
    state = action.users;
  }
  return state;
};
const candyReducer = (state = [], action) => {
  if (action.type === "GET_CANDY") {
    console.log(`This is the candy store ${action.candy}`);
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

export default store;
//Named export
export { getUsers, getCandy };
