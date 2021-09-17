import { render } from "@testing-library/react";
import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="oleez-footer wow fadeInUp">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="assets/images/Logo_1.svg"
                    alt="oleez"
                    className="footer-logo"
                  />
                  <p className="footer-intro-text">
                    Don't be shy, get in touch with us and create the world
                    again!
                  </p>
                  <nav className="footer-social-links">
                    <a href="#!">Fb</a>
                    <a href="#!">Tw</a>
                    <a href="#!">In</a>
                    <a href="#!">Be</a>
                  </nav>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 footer-widget-text">
                      <h6 className="widget-title">PHONE</h6>
                      <p className="widget-content">+80 (0)5 12 34 95 89</p>
                    </div>
                    <div className="col-md-6 footer-widget-text">
                      <h6 className="widget-title">ENQUIRUES</h6>
                      <p className="widget-content">info@oleez.site</p>
                    </div>
                    <div className="col-md-6 footer-widget-text">
                      <h6 className="widget-title">ADDRESS</h6>
                      <p className="widget-content">
                        33 rue Burdeau 69089 <br /> Paris France
                      </p>
                    </div>
                    <div className="col-md-6 footer-widget-text">
                      <h6 className="widget-title">WORK HOURS</h6>
                      <p className="widget-content">
                        Weekdays: 09:00 - 18:00 <br /> Weekends: 11:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-text">
              <p className="mb-md-0">
                © 2020, oleez Theme. Made with passion by{" "}
                <a
                  href="https://www.bootstrapdash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reset"
                >
                  BootstrapDash
                </a>
                .
              </p>
              <p className="mb-0">All right reserved.</p>
            </div>
          </div>
        </footer>
        <nav id="offCanvasMenu" className="off-canvas-menu">
          <button
            type="button"
            className="close"
            aria-label="Close"
            data-dismiss="offCanvasMenu"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <ul className="oleez-social-menu">
            <li>
              <a href="#!" className="oleez-social-menu-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="oleez-social-menu-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="oleez-social-menu-link">
                Behance
              </a>
            </li>
            <li>
              <a href="#!" className="oleez-social-menu-link">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#!" className="oleez-social-menu-link">
                Email
              </a>
            </li>
          </ul>
        </nav>
        <div id="searchModal" className="search-modal">
          <button
            type="button"
            className="close"
            aria-label="Close"
            data-dismiss="searchModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <form
            action="index.html"
            method="get"
            className="oleez-overlay-search-form"
          >
            <label for="search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="oleez-overlay-search-input"
              id="search"
              name="search"
              placeholder="Search here"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Footer;