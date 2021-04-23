import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import InfiniteScrollApp from "./InfiniteScrollApp";

const AppComponent = InfiniteScrollApp;

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
