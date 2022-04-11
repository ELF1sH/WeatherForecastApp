import React, {useState} from 'react';
import {NestedRouter} from "./components/NestedRouter";
import {ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme, ThemeType} from "./themes";
import {ThemeSwitcher} from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  return (
      <>
        <ThemeSwitcher />
        <NestedRouter />
      </>
  );
}

export default App;
