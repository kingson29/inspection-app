import React, { Component } from "react";
import TextInput from "./common/textInput";
import Enum from "./common/Enum";
import ImageInput from "./common/imageInput";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {
      caseid: { id: "caseid", name: "CaseId", value: "", type: "text" },
      dateOfVisit: { id: "dateOfVisit", name: "Date", value: "", type: "text" },
      staff: {
        id: "staff",
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
        id: "photo",
        name: "Submit Check In Photo: ",
        value: "",
        type: "text"
      }
    }
  };

  handleChange = e => {
    console.log();
    const data = { ...this.state.data };
    data[e.currentTarget.id].value = e.currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted.w");
  };

  render() {
    const { caseid, dateOfVisit, staff, didCheckIn, photo } = this.state.data;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="container">
          <TextInput
            id={caseid.id}
            name={caseid.name}
            value={caseid.value}
            type={caseid.type}
            onChange={this.handleChange}
          />
          <TextInput
            id={dateOfVisit.id}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
