import React from "react";

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
