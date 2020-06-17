import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { GlobalContextProvider } from "./state";
import { FightContextProvider } from "./state/fight";
import "mobx-react-lite/batchingForReactDom";
import ErrorHandlerMain from "./components/ErrorHandlerMain";

ReactDOM.render(
  <React.StrictMode>
    <ErrorHandlerMain>
      <GlobalContextProvider>
        <FightContextProvider>
          <App />
        </FightContextProvider>
      </GlobalContextProvider>
    </ErrorHandlerMain>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
