/*
 * @Author: your name
 * @Date: 2021-04-29 15:45:20
 * @LastEditTime: 2021-06-02 22:13:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import windowUtils from "./utils/window";
import { BrowserRouter, Route } from "react-router-dom";
import Dialog from "./component/对话框拖拽/practice";

windowUtils();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Route path="/" component={App} /> */}
      <Route path="/dialog" component={Dialog} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
