import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routers from "./routers/router";

function App() {
  return (
      <Routers />
  );
}

export default App;