import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="f1b2467e-3aa9-41de-bb6e-ed5932061494" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
