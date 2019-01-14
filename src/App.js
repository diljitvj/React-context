import React, { Component } from "react";
import "./App.css";
import ParentComponent from "./components/parent";
import { ThemeProvider } from "./providers/theme.provider";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDark: true
    };
  }

  changeTheme = () => {
    this.setState({
      isDark: !this.state.isDark
    });
  };

  render() {
    const { isDark } = this.state;
    return (
      <div className={isDark ? "dark" : "light"}>
        <button onClick={this.changeTheme}>
          Change Theme from Super Parent
        </button>
        <ThemeProvider
          value={{ isDark, changeTheme: this.changeTheme.bind(this) }}
        >
          <ParentComponent />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
