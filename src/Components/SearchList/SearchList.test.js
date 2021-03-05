import React from "react";
import ReactDOM from "react-dom";
import SearchList from "./SearchList";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SearchList />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
