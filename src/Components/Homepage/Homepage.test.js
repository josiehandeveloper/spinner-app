import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Homepage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
