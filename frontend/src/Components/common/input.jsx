import React, { Component } from "react";

//We have created a functional component that has no state (a controlled component)

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>{" "}
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="text"
        className="form-control"
        id={name}
      />
    </div>
  );
};

export default Input;
