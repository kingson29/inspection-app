import React, { Component } from "react";

const Enum = props => {
  return (
    <div className="enumlist">
      <p class="enum-label">{props.name}</p>
      {props.enum.map(e => (
        <div className="enum-button">{e}</div>
      ))}
    </div>
  );
};

export default Enum;
