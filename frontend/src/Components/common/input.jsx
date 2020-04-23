import React, { Component } from "react";

//We have created a functional component that has no state (a controlled component)

const Input = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>{" "}
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
