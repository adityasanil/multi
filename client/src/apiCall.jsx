import React, { Component, Fragment } from "react";
import axios from "axios";

class Api extends Component {
  state = {
    data: "",
    surname: ""
  };

  async componentDidMount() {
    const { data } = await axios.get("/api/name");
    const result = await axios.get("/api2/surname");
    console.log(result);
    this.setState({ data: data.data, surname: result.data.surname });
  }

  render() {
    return <Fragment>Name:</Fragment>;
  }
}

export default Api;
