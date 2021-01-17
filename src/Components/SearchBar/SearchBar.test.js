import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SearchBar />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
