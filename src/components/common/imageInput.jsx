import React, { Component } from "react";

const ImageInput = props => {
  return (
    <div className="custom-form-group">
      <label for={props.id}>{props.name}</label>
      <input
        type="file"
        name="file"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default ImageInput;
