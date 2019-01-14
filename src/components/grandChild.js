import React, { Component } from "react";
import { ThemeConsumer } from "../providers/theme.provider";

export default class grandChild extends Component {
  render() {
    const { isDark, changeTheme } = this.context;
    return (
      <div>
        <h3 className={isDark ? "dark" : "light"}>I am a grand child</h3>
        <button onClick={changeTheme}>Change Theme from Grand child</button>
      </div>
    );
  }
}

grandChild.contextType = ThemeConsumer;
