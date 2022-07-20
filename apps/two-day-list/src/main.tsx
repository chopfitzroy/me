import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { enableMapSet } from "immer";

// @NOTE
// - Would love to abstract this to somewhere else...
enableMapSet();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
