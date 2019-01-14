import React, { Component } from "react";
import ChildComponent from "./child";

export default class parent extends Component {
  render() {
    return (
      <div>
        <h1>I am a parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
