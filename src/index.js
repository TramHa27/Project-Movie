import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DOMAIN } from "./util/setting";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Import css antd
import "antd/dist/antd.css";
//Cấu hình realtime (websocket với signalR)
import * as signalR from "@aspnet/signalr";
//import đa ngôn ngữ
import './i18n'

//Kết nối đến sever lắng nghe sever
export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log("Error", err);
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
