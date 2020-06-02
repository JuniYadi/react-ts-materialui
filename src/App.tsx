import * as React from "react";
import "./styles.css";
import Menu from "./Components/Menu";
import Page from "./Pages/Page";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Page />
    </div>
  );
}
