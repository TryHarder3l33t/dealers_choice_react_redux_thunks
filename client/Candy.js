import React from "react";
import { connect } from "react-redux";

const Candy = ({ candy }) => {
  return (
    <ul>
      {candy.map((candy) => (
        <li key={candy.id}>{candy.name}</li>
      ))}
    </ul>
  );
};

export default connect((state) => state)(Candy);
