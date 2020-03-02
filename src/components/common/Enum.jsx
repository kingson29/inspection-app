import React, { Component } from "react";

const Enum = props => {
  return (
    <div className="enumlist">
      <p className="enum-label">{props.name}</p>
      <div className="btn-group-toggle" data-toggle="buttons">
        {props.enum.map(e => (
          <label
            className={
              props.value === e
                ? "btn btn-primary btn-lg"
                : "btn btn-outline-primary btn-lg"
            }
          >
            <input
              id={props.id}
              type="checkbox"
              onChange={props.onChange}
              value={e}
            />{" "}
            {e}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Enum;
