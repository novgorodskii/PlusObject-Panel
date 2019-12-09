import React from "react";
import ReactDOM from "react-dom";

import ApiExpenses from './service/apiResource';

import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
