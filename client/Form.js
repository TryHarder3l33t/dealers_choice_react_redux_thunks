// //TODO
// import React from "react";
// import { connect } from "react-redux";
// import { formChange } from "../store";

// const TheForm = ({ value, onChange, handleSubmit }) => {
//   return (
//     <form onSubmit={() => handleSubmit()}>
//       <label>Name*:</label>
//       <br />
//       <input name="name" type="text" value={value} onChange={onChange} />
//       <br />
//       <label>Nickname*:</label>
//       <br />
//       <input name="nickName" type="text" value={value} onChange={onChange} />
//       <br />
//       <label>Phone:</label> <br />
//       <input name="phone" type="text" value={value} onChange={onChange} />
//       <br />
//       <label>Email:</label> <br />
//       <input name="email" type="text" value={value} onChange={onChange} />
//       <br />
//       <input type="submit" value="Submit" />
//       <br />
//       <p>*Required</p>
//     </form>
//   );
// };

// const mapDispatch = (dispatch) => {
//   return {
//     onChange: (onChange) => {
//       dispatch(formChange(onChange));
//     },
//   };
// };

// export default connect((state) => state, mapDispatch)(TheForm);
