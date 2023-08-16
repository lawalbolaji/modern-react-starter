import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./main.css";
import { Provider } from "react-redux";
import { setupStore } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
);
