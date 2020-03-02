import React, { Component } from "react";
import TextInput from "./common/textInput";
import Enum from "./common/Enum";

class Form extends Component {
  state = {
    caseid: { name: "CaseId", value: "", type: "text" },
    dateOfVisit: { name: "Date", value: "", type: "text" },
    staff: {
      id: "staffCheckbox",
      name: "Please select staff who has visited the site: ",
      value: "",
      enum: ["Lung", "Kenny"]
    },
    didCheckIn: { name: "Check-In", value: "", type: "checkbox" },
    photo: { name: "Photo", value: "", type: "text" }
  };

  handleChange = e => {
    console.log(e.currentTarget.id);
    const caseid = { ...this.state.caseid };
    const staff = { ...this.state.staff };
    if (e.currentTarget.id === this.state.staff.name)
      caseid.value = e.currentTarget.value;
    if (e.currentTarget.id === this.state.staff.id)
      staff.value = e.currentTarget.value;

    this.setState({ caseid, staff });
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
          <Enum
            id={staff.id}
            name={staff.name}
            value={staff.value}
            enum={staff.enum}
            onChange={this.handleChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
