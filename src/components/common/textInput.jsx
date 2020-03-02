import React, { Component } from "react";

const TextInput = ({ id, name, value, type, onChange }) => {
  return (
    <React.Fragment>
      <div class="input-group" style={{ margin: 5 }}>
        <div class="input-group-prepend">
          <span class="input-group-text" style={{ width: 150 }}>
            {name}
          </span>
        </div>
        <input
          value={value}
          type={type}
          class="form-control"
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  );
};

export default TextInput;
