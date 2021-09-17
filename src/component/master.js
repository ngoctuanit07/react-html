import React from "react";
class Master extends React.Component{
    render(){
        return (
            <div>
                  <div classNameName="oleez-loader"></div>
    <header classNameName="oleez-header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html"><img src="assets/images/Logo_2.svg" alt="Oleez"/></a>
            <ul className="nav nav-actions d-lg-none ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#!" data-toggle="searchModal">
                        <img src="assets/images/search.svg" alt="search"/>
                    </a>
                </li>
                <li className="nav-item nav-item-cart">
                    <a className="nav-link" href="#!">
                        <span className="cart-item-count">0</span>
                        <img src="assets/images/shopping-cart.svg" alt="cart"/>
                    </a>
                </li>
                <li className="nav-item dropdown d-none d-sm-block">
                    <a className="nav-link dropdown-toggle" href="#!" id="languageDropdown" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">ENG</a>
                    <div className="dropdown-menu" aria-labelledby="languageDropdown">
                        <a className="dropdown-item" href="#!">ARB</a>
                        <a className="dropdown-item" href="#!">FRE</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!" data-toggle="offCanvasMenu">
                        <img src="assets/images/social icon@2x.svg" alt="social-nav-toggle"/>
                    </a>
                </li>
            </ul>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#oleezMainNav"
                aria-controls="oleezMainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="oleezMainNav">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="pagesDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <a className="dropdown-item" href="shop.html">Shop</a>
                            <a className="dropdown-item" href="contact.html">Contact</a>
                            <a className="dropdown-item" href="404.html">404</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="portfolioDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Portfolio</a>
                        <div className="dropdown-menu" aria-labelledby="portfolioDropdown">
                            <a className="dropdown-item" href="portfolio-list.html">Portfolio list</a>
                            <a className="dropdown-item" href="portfolio.html">Portfolio grid</a>
                            <a className="dropdown-item" href="portfolio-masonry.html">Portfolio masonry</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="blogDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <div className="dropdown-menu" aria-labelledby="blogDropdown">
                            <a className="dropdown-item" href="blog-standard.html">Blog Standard</a>
                            <a className="dropdown-item" href="blog-grid.html">Blog grid</a>
                            <a className="dropdown-item" href="blog-single.html">Blog Post</a>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav d-none d-lg-flex">
                    <li className="nav-item">
                        <a className="nav-link nav-link-btn" href="#!" data-toggle="searchModal">
                            <img src="assets/images/search.svg" alt="search"/>
                        </a>
                    </li>
                    <li className="nav-item nav-item-cart">
                        <a className="nav-link nav-link-btn" href="#!">
                            <span className="cart-item-count">0</span>
                            <img src="assets/images/shopping-cart.svg" alt="cart"/>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle " href="#!" id="languageDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">ENG</a>
                        <div className="dropdown-menu" aria-labelledby="languageDropdown">
                            <a className="dropdown-item" href="#!">ARB</a>
                            <a className="dropdown-item" href="#!">FRE</a>
                        </div>
                    </li>
                    <li className="nav-item ml-5">
                        <a className="nav-link pr-0 nav-link-btn" href="#!" data-toggle="offCanvasMenu">
                            <img src="assets/images/social icon@2x.svg" alt="social-nav-toggle"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section>
            <div className="container wow fadeIn">
                <div id="oleezLandingCarousel" className="oleez-landing-carousel carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="assets/images/Banner_1@2x.jpg" alt="First slide" className="w-100"/>
                            <div className="carousel-caption">
                                <h2 data-animation="animated fadeInRight"><span>Remarkable</span></h2>
                                <h2 data-animation="animated fadeInRight"><span>Digital agency</span></h2>
                                <a href="#!" className="carousel-item-link" data-animation="animated fadeInRight">EXPLORE PROJECT</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Banner_2@2x.jpg" alt="Second slide" className="w-100"/>
                            <div className="carousel-caption">
                                <h2 data-animation="animated fadeInRight"><span>Remarkable</span></h2>
                                <h2 data-animation="animated fadeInRight"><span>Digital agency</span></h2>
                                <a href="#!" className="carousel-item-link" data-animation="animated fadeInRight">EXPLORE PROJECT</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Banner_3@2x.jpg" alt="Third slide" className="w-100"/>
                            <div className="carousel-caption">
                                <h2 data-animation="animated fadeInRight"><span>Remarkable</span></h2>
                                <h2 data-animation="animated fadeInRight"><span>Digital agency</span></h2>
                                <a href="#!" className="carousel-item-link" data-animation="animated fadeInRight">EXPLORE PROJECT</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Banner_4@2x.jpg" alt="Fourth slide" className="w-100"/>
                            <div className="carousel-caption">
                                <h2 data-animation="animated fadeInRight"><span>Remarkable</span></h2>
                                <h2 data-animation="animated fadeInRight"><span>Digital agency</span></h2>
                                <a href="#!" className="carousel-item-link" data-animation="animated fadeInRight">EXPLORE PROJECT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-about">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">01</span> <img src="assets/images/Logo_2.svg" alt="ollez" height="12px"/>
                    </div>
                    <div className="row landing-about-content wow fadeInUp">
                        <div className="col-md-6">
                            <h2>We help and solve your business problem.</h2>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis delectus dolorem possimus, dolor rerum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 landing-about-feature wow fadeInUp">
                            <img src="assets/images/icon_1.svg" alt="document" className="about-feature-icon"/>
                            <h5 className="about-feature-title">Market Research</h5>
                            <p className="about-feature-description">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                        </div>
                        <div className="col-md-4 landing-about-feature wow fadeInUp">
                            <img src="assets/images/icon_2.svg" alt="document" className="about-feature-icon"/>
                            <h5 className="about-feature-title">Wireframe/Sketch</h5>
                            <p className="about-feature-description">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                        </div>
                        <div className="col-md-4 landing-about-feature wow fadeInUp">
                            <img src="assets/images/icon_3.svg" alt="document" className="about-feature-icon"/>
                            <h5 className="about-feature-title">Creative Design</h5>
                            <p className="about-feature-description">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-projects">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">02</span> <img src="assets/images/Logo_2.svg" alt="oleez" height="12px"/>
                    </div>
                    <h2 className="section-title wow fadeInUp">Latest Projects <a href="#!" className="all-projects-link">View All</a></h2>
                    <div className="landing-projects-carousel wow fadeIn">
                        <div className="card landing-project-card">
                            <img src="assets/images/Project_1@2x.jpg" className="card-img" alt="Project 1"/>
                            <div className="card-img-overlay">
                                <h6 className="project-category">Branding</h6>
                                <h5 className="project-title">BootstrapDash</h5>
                            </div>
                        </div>
                        <div className="card landing-project-card">
                            <img src="assets/images/Project_2@2x.jpg" className="card-img" alt="Project 1"/>
                            <div className="card-img-overlay">
                                <h6 className="project-category">Branding</h6>
                                <h5 className="project-title">BootstrapDash</h5>
                            </div>
                        </div>
                        <div className="card landing-project-card">
                            <img src="assets/images/Project_3@2x.jpg" className="card-img" alt="Project 1"/>
                            <div className="card-img-overlay">
                                <h6 className="project-category">Branding</h6>
                                <h5 className="project-title">BootstrapDash</h5>
                            </div>
                        </div>
                        <div className="card landing-project-card">
                            <img src="assets/images/Project_4@2x.jpg" className="card-img" alt="Project 1"/>
                            <div className="card-img-overlay">
                                <h6 className="project-category">Branding</h6>
                                <h5 className="project-title">BootstrapDash</h5>
                            </div>
                        </div>
                    </div>
                    <div className="slick-navbtn-wrapper"></div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-team">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">03</span> <img src="assets/images/Logo_2.svg" alt="ollez" height="12px"/>
                    </div>
                    <div className="row landing-team-content wow fadeInUp">
                        <div className="col-md-6">
                            <h2 className="section-title">Meet The Team <br/> Our Professionals</h2>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis delectus dolorem possimus, dolor rerum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                            <img src="assets/images/Team_3@2x.jpg" alt="Team Member" className="team-card-img"/>
                            <h5 className="team-card-name">Siri Jakobsson</h5>
                            <p className="team-card-job">Web Developer</p>
                            <nav className="team-card-social-links">
                                <a href="#!">Fb</a>
                                <a href="#!">Tw</a>
                                <a href="#!">In</a>
                            </nav>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                                <img src="assets/images/Team_2@2x.jpg" alt="Team Member" className="team-card-img"/>
                                <h5 className="team-card-name">Arend Pellewever</h5>
                                <p className="team-card-job">Founder</p>
                                <nav className="team-card-social-links">
                                    <a href="#!">Fb</a>
                                    <a href="#!">Tw</a>
                                    <a href="#!">In</a>
                                </nav>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                                <img src="assets/images/Team_1@2x.jpg" alt="Team Member" className="team-card-img"/>
                                <h5 className="team-card-name">Antokolskiy</h5>
                                <p className="team-card-job">Web Developer</p>
                                <nav className="team-card-social-links">
                                    <a href="#!">Fb</a>
                                    <a href="#!">Tw</a>
                                    <a href="#!">In</a>
                                </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-client">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">04</span> <img src="assets/images/Logo_2.svg" alt="ollez" height="12px"/>
                    </div>
                    <h2 className="section-title mb-1 wow fadeInUp">Partners & clients</h2>
                    <p className="client-section-subtitle">We’re constantly refining our product. Adding new features. Working to help your business grow.</p>
                    <div className="row">
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_4.png" alt="client" height="50px"/>
                            </div>
                        </div>
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_2.png" alt="client" height="50px"/>
                            </div>
                        </div>
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_1.png" alt="client" height="50px"/>
                            </div>
                        </div>
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_6.png" alt="client" height="50px"/>
                            </div>
                        </div>
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_3.png" alt="client" height="50px"/>
                            </div>
                        </div>
                        <div className="col-md-4 client-logo-wrapper wow flipInX">
                            <div className="client-logo">
                                <img src="assets/images/client_5.png" alt="client" height="50px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-news">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">05</span> <img src="assets/images/Logo_2.svg" alt="ollez" height="12px"/>
                    </div>
                    <h2 className="section-title wow fadeInUp">Recent News & Stories.</h2>
                    <p className="news-section-subtitle wow fadeInUp">Share your stories and news with everyone.</p>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="news-card news-card-1 wow fadeInUp">
                                <div className="card-body">
                                    <div className="author-info media">
                                        <img src="assets/images/Team_1_Copy_2@2x.jpg" alt="author" className="author-avatar"/>
                                        <div className="media-body">
                                            <h6 className="author-name">Posted by Colabrio</h6>
                                            <p className="news-post-date">July 5, 2019</p>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <span className="post-category">Digital Strategy</span> 4 min read
                                    </div>
                                    <h5 className="post-title">The Ultimate Guide to Make Your WordPress Journal.</h5>
                                    <a href="#!" className="post-permalink">Read more </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="news-card news-card-2 wow fadeInUp">
                                <div className="card-body">
                                    <div className="author-info media">
                                        <img src="assets/images/Team_2_Copy_2@2x.jpg" alt="author" className="author-avatar"/>
                                        <div className="media-body">
                                            <h6 className="author-name">Posted by Stormie</h6>
                                            <p className="news-post-date">July 5, 2019</p>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <span className="post-category">Personal</span> 4 min read
                                    </div>
                                    <h5 className="post-title">The Highly Contemporary UI/UX Design from a london.</h5>
                                    <a href="#!" className="post-permalink">Read more </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="news-card news-card-3 wow fadeInUp">
                                <div className="card-body">
                                    <div className="author-info media">
                                        <img src="assets/images/Team_3_Copy_2@2x.jpg" alt="author" className="author-avatar"/>
                                        <div className="media-body">
                                            <h6 className="author-name">Posted by Angela</h6>
                                            <p className="news-post-date">July 5, 2019</p>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <span className="post-category">Personal</span> 4 min read
                                    </div>
                                    <h5 className="post-title">A Color Exercise for our Brand’s Illustration </h5>
                                    <a href="#!" className="post-permalink">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="oleez-landing-section oleez-landing-section-testimonials">
            <div className="container">
                <div className="oleez-landing-section-content">
                    <div className="oleez-landing-section-verticals wow fadeIn">
                        <span className="number">05</span> <img src="assets/images/Logo_2.svg" alt="ollez" height="12px"/>
                    </div>
                    <div className="d-md-flex justify-content-between wow fadeInUp">
                        <div className="testimonial-section-content">
                            <h2 className="section-title">What our clients say</h2>
                            <p className="section-subtitle">Share your stories and news with everyone.</p>
                        </div>
                        <div className="testimonial-carousel-navbtn-wrapper"></div>
                    </div>
                    <div className="landing-testimonial-carousel wow fadeInUp">
                        <div className="landing-testimonial-card">
                            <div className="media">
                                <img src="assets/images/Client_1@2x.jpg" alt="client" className="testimonial-card-img"/>
                                <div className="media-body">
                                    <p className="testimonial-card-content">
                                        The revulsion in our feelings was therefore all the greater when the car suddenly escaped from this height of desolation, and a magnificent prospect burst upon our view.
                                    </p>
                                    <h6 className="testimonial-card-name">Winnie Warner</h6>
                                    <p className="testimonial-card-company">Creative Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="landing-testimonial-card">
                            <div className="media">
                                <img src="assets/images/Client_2@2x.jpg" alt="client" className="testimonial-card-img"/>
                                <div className="media-body">
                                    <p className="testimonial-card-content">
                                        The revulsion in our feelings was therefore all the greater when the car suddenly escaped from this height of desolation, and a magnificent prospect burst upon our view.
                                    </p>
                                    <h6 className="testimonial-card-name">Wesley Ford</h6>
                                    <p className="testimonial-card-company">Creative Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="landing-testimonial-card">
                            <div className="media">
                                <img src="assets/images/Client_3@2x.jpg" alt="client" className="testimonial-card-img"/>
                                <div className="media-body">
                                    <p className="testimonial-card-content">
                                        The revulsion in our feelings was therefore all the greater when the car suddenly escaped from this height of desolation, and a magnificent prospect burst upon our view.
                                    </p>
                                    <h6 className="testimonial-card-name">Winnie Warner</h6>
                                    <p className="testimonial-card-company">Creative Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="landing-testimonial-card">
                            <div className="media">
                                <img src="assets/images/Client_4@2x.jpg" alt="client" className="testimonial-card-img"/>
                                <div className="media-body">
                                    <p className="testimonial-card-content">
                                        The revulsion in our feelings was therefore all the greater when the car suddenly escaped from this height of desolation, and a magnificent prospect burst upon our view.
                                    </p>
                                    <h6 className="testimonial-card-name">Wesley Ford</h6>
                                    <p className="testimonial-card-company">Creative Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </main>

    <footer className="oleez-footer wow fadeInUp">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets/images/Logo_1.svg" alt="oleez" className="footer-logo"/>
                        <p className="footer-intro-text">Don't be shy, get in touch with us and create the world again!</p>
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
                                <p className="widget-content">33 rue Burdeau 69089 <br/> Paris France</p>
                            </div>
                            <div className="col-md-6 footer-widget-text">
                                <h6 className="widget-title">WORK HOURS</h6>
                                <p className="widget-content">Weekdays: 09:00 - 18:00 <br/> Weekends: 11:00 - 17:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <p className="mb-md-0">©  2020, oleez Theme. Made with passion by <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer" className="text-reset">BootstrapDash</a>.</p>
                <p className="mb-0">All right reserved.</p>
            </div>
        </div>
    </footer>
    <nav id="offCanvasMenu" className="off-canvas-menu">
        <button type="button" className="close" aria-label="Close" data-dismiss="offCanvasMenu">
            <span aria-hidden="true">&times;</span>
        </button>
        <ul className="oleez-social-menu">
            <li>
                <a href="#!" className="oleez-social-menu-link">Facebook</a>
            </li>
            <li>
                <a href="#!" className="oleez-social-menu-link">Instagram</a>
            </li>
            <li>
                <a href="#!" className="oleez-social-menu-link">Behance</a>
            </li>
            <li>
                <a href="#!" className="oleez-social-menu-link">Dribbble</a>
            </li>
            <li>
                <a href="#!" className="oleez-social-menu-link">Email</a>
            </li>
        </ul>
    </nav>
    <div id="searchModal" className="search-modal">
        <button type="button" className="close" aria-label="Close" data-dismiss="searchModal">
            <span aria-hidden="true">&times;</span>
        </button>
        <form action="index.html" method="get" className="oleez-overlay-search-form">
            <label for="search" className="sr-only">Search</label>
            <input type="search" className="oleez-overlay-search-input" id="search" name="search" placeholder="Search here"/>
        </form>
    </div>
            </div>
        );
    }
}
export default Master;