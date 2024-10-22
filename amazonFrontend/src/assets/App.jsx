import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import {ThemeProvider} from './ContextProvider'

function App() {
  <ThemeProvider>
    <ComponentA />
    <ComponentB />
  </ThemeProvider>;
}

export default App;
