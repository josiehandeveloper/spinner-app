import React from "react";
import ReactDOM from "react-dom";
import MyList from "./MyList";
import Context from "../../Context";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <MyList />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
