import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div>
        <div classNameName="oleez-loader"></div>
        <header classNameName="oleez-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/Logo_2.svg" alt="Oleez" />
            </a>
            <ul className="nav nav-actions d-lg-none ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!" data-toggle="searchModal">
                  <img src="assets/images/search.svg" alt="search" />
                </a>
              </li>
              <li className="nav-item nav-item-cart">
                <a className="nav-link" href="#!">
                  <span className="cart-item-count">0</span>
                  <img src="assets/images/shopping-cart.svg" alt="cart" />
                </a>
              </li>
              <li className="nav-item dropdown d-none d-sm-block">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="languageDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ENG
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <a className="dropdown-item" href="#!">
                    ARB
                  </a>
                  <a className="dropdown-item" href="#!">
                    FRE
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" data-toggle="offCanvasMenu">
                  <img
                    src="assets/images/social icon@2x.svg"
                    alt="social-nav-toggle"
                  />
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#oleezMainNav"
              aria-controls="oleezMainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="oleezMainNav">
              <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="pagesDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="pagesDropdown"
                  >
                    <a className="dropdown-item" href="shop.html">
                      Shop
                    </a>
                    <a className="dropdown-item" href="contact.html">
                      Contact
                    </a>
                    <a className="dropdown-item" href="404.html">
                      404
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="portfolioDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="portfolioDropdown"
                  >
                    <a className="dropdown-item" href="portfolio-list.html">
                      Portfolio list
                    </a>
                    <a className="dropdown-item" href="portfolio.html">
                      Portfolio grid
                    </a>
                    <a className="dropdown-item" href="portfolio-masonry.html">
                      Portfolio masonry
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="blogDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="blogDropdown">
                    <a className="dropdown-item" href="blog-standard.html">
                      Blog Standard
                    </a>
                    <a className="dropdown-item" href="blog-grid.html">
                      Blog grid
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Post
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav d-none d-lg-flex">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-btn"
                    href="#!"
                    data-toggle="searchModal"
                  >
                    <img src="assets/images/search.svg" alt="search" />
                  </a>
                </li>
                <li className="nav-item nav-item-cart">
                  <a className="nav-link nav-link-btn" href="#!">
                    <span className="cart-item-count">0</span>
                    <img src="assets/images/shopping-cart.svg" alt="cart" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#!"
                    id="languageDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ENG
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="languageDropdown"
                  >
                    <a className="dropdown-item" href="#!">
                      ARB
                    </a>
                    <a className="dropdown-item" href="#!">
                      FRE
                    </a>
                  </div>
                </li>
                <li className="nav-item ml-5">
                  <a
                    className="nav-link pr-0 nav-link-btn"
                    href="#!"
                    data-toggle="offCanvasMenu"
                  >
                    <img
                      src="assets/images/social icon@2x.svg"
                      alt="social-nav-toggle"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
