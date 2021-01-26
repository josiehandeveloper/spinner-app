import React from "react";
import githubLogo from "../../images/githubLogo.png";
import gmailLogo from "../../images/gmailLogo.png";
import linkedInLogo from "../../images/linkedInLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="row">
          <p className="col-sm">
            <a className="link" href="mailto:jsphnhan@gmail.com">
              <img src={gmailLogo} width="22" alt="email" />
            </a>{" "}
            |{" "}
            <a className="link" href="https://github.com/josiehandeveloper">
              <img src={githubLogo} width="20" alt="github" />
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/josephine-han/"
            >
              <img src={linkedInLogo} width="24" alt="linkedIn" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
