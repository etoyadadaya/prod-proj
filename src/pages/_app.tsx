import "../common/styles/index.scss";

import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import {Router} from "./router.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
