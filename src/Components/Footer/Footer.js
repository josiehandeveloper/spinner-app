import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="row">
          <p className="col-sm">
            <a className="link" href="mailto:jsphnhan@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>{" "}
            |{" "}
            <a className="link" href="https://github.com/josiehandeveloper">
              <i className="fab fa-github"></i>
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/josephine-han/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
