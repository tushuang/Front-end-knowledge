/*
 * @Author: your name
 * @Date: 2021-04-29 15:45:20
 * @LastEditTime: 2021-04-29 15:46:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /app/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import windowUtils from "./utils/window";

windowUtils();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
