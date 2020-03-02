import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewForm from "./form";

class CheckList extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Case ID</th>
              <th>Date</th>
              <th>Staff</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <td>12345</td>
              <td>2019-12-31</td>
              <td>Lung</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CheckList;
