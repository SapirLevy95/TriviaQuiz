import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MenuTabs } from "./components/menuTabs/MenuTabs";

function App() {
  return (
    <div>
      <label>Trivia Quiz</label>
      <MenuTabs></MenuTabs>
    </div>
  );
}

export default App;
