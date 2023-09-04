import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./Home/Home.jsx";

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
};
