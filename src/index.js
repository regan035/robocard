import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import CardList from "./CardList";

// using {}destructure for non-export default
import { robots } from "./robots";

import reportWebVitals from "./reportWebVitals";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));

// CardList receoves robots properties
root.render(<CardList robots={robots} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
