import React, { Component } from "react";
import TextInput from "./common/textInput";
import Enum from "./common/Enum";

class Form extends Component {
  state = {
    caseid: { name: "CaseId", value: "", type: "text" },
    dateOfVisit: { name: "Date", value: "", type: "text" },
    staff: { name: "Staff", value: "", enum: ["Lung", "Kenny"] },
    didCheckIn: { name: "Check-In", value: "", type: "checkbox" },
    photo: { name: "Photo", value: "", type: "text" }
  };

  handleChange = e => {
    const caseid = { ...this.state.caseid };
    caseid.value = e.currentTarget.value;
    this.setState({ caseid });
  };

  render() {
    const { caseid, dateOfVisit, staff, didCheckIn, photo } = this.state;
    return (
      <React.Fragment>
        <form className="container">
          <TextInput
            name={caseid.name}
            value={caseid.value}
            type={caseid.type}
            onChange={this.handleChange}
          />
          <TextInput
            name={dateOfVisit.name}
            value={dateOfVisit.value}
            type={dateOfVisit.type}
            onChange={this.handleChange}
          />
          <Enum name={staff.name} enum={staff.enum} />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
