import "../common/styles/index.scss";

import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";

import store, {persistor} from "../store/store";
import {Router} from "./router.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
