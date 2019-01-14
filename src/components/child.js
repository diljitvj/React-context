import React, { Component } from "react";
import GrandChildComponent from "./grandChild";

export default class child extends Component {
  render() {
    return (
      <div>
        <h2>I am a Child</h2>
        <GrandChildComponent />
      </div>
    );
  }
}
