import React, { Component } from "react";
import TextInput from "./common/textInput";
import Enum from "./common/Enum";
import ImageInput from "./common/imageInput";

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
    didCheckIn: {
      id: "didCheckIn",
      name: "Did you check in?",
      value: "",
      enum: ["Yes", "No"]
    },
    photo: {
      id: "photoInput",
      name: "Submit Check In Photo: ",
      value: "",
      type: "text"
    }
  };

  handleChange = e => {
    console.log(e.currentTarget.id);
    const caseid = { ...this.state.caseid };
    const staff = { ...this.state.staff };
    const didCheckIn = { ...this.state.didCheckIn };
    const photo = { ...this.state.photo };
    if (e.currentTarget.id === this.state.staff.name)
      caseid.value = e.currentTarget.value;
    if (e.currentTarget.id === this.state.staff.id)
      staff.value = e.currentTarget.value;
    if (e.currentTarget.id === this.state.didCheckIn.id)
      didCheckIn.value = e.currentTarget.value;
    if (e.currentTarget.id === this.state.photo.id)
      photo.value = e.currentTarget.value;

    this.setState({ caseid, staff, didCheckIn, photo });
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
          <Enum
            id={didCheckIn.id}
            name={didCheckIn.name}
            value={didCheckIn.value}
            enum={didCheckIn.enum}
            onChange={this.handleChange}
          />
          <ImageInput
            id={photo.id}
            name={photo.name}
            value={photo.value}
            onChange={this.handleChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
