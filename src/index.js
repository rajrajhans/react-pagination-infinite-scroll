import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import InfiniteScrollApp from "./InfiniteScrollApp";
import PaginationApp from "./PaginationApp";

const AppComponent = InfiniteScrollApp;
// const AppComponent = PaginationApp;

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
