import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

// const initialState = {
//   users: [],
//   candy: [],
//   single: {},
// };

// const store = createStore((state = initialState, action) => {
//   //   if (action.type === "GET_USERS") {
//   //     console.log(`This is the store ${action.users}`);
//   //     state = { ...state, users: action.users };
//   //   }
// //   if (action.type === "GET_CANDY") {
// //     console.log(`This is the candy store ${action.candy}`);
// //     state = { ...state, candy: action.candy };
// //   }
//   return state;
// });

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

const store = createStore(reducer);

const getUsers = (users) => {
  return {
    type: "GET_USERS",
    users,
  };
};
const getCandy = (candy) => {
  return {
    type: "GET_CANDY",
    candy,
  };
};

export default store;
//Named export
export { getUsers, getCandy };
