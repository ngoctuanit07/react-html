import React from "react";
import Header from "../partials/header";
import Footer from "../partials/footer";
class Master extends React.Component {
  render() {
    return (
      <div>
       <Header/>
        <main>
          <section>
            <div className="container wow fadeIn">
              <div
                id="oleezLandingCarousel"
                className="oleez-landing-carousel carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      src="assets/images/Banner_1@2x.jpg"
                      alt="First slide"
                      className="w-100"
                    />
                    <div className="carousel-caption">
                      <h2 data-animation="animated fadeInRight">
                        <span>Remarkable</span>
                      </h2>
                      <h2 data-animation="animated fadeInRight">
                        <span>Digital agency</span>
                      </h2>
                      <a
                        href="#!"
                        className="carousel-item-link"
                        data-animation="animated fadeInRight"
                      >
                        EXPLORE PROJECT
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Banner_2@2x.jpg"
                      alt="Second slide"
                      className="w-100"
                    />
                    <div className="carousel-caption">
                      <h2 data-animation="animated fadeInRight">
                        <span>Remarkable</span>
                      </h2>
                      <h2 data-animation="animated fadeInRight">
                        <span>Digital agency</span>
                      </h2>
                      <a
                        href="#!"
                        className="carousel-item-link"
                        data-animation="animated fadeInRight"
                      >
                        EXPLORE PROJECT
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Banner_3@2x.jpg"
                      alt="Third slide"
                      className="w-100"
                    />
                    <div className="carousel-caption">
                      <h2 data-animation="animated fadeInRight">
                        <span>Remarkable</span>
                      </h2>
                      <h2 data-animation="animated fadeInRight">
                        <span>Digital agency</span>
                      </h2>
                      <a
                        href="#!"
                        className="carousel-item-link"
                        data-animation="animated fadeInRight"
                      >
                        EXPLORE PROJECT
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Banner_4@2x.jpg"
                      alt="Fourth slide"
                      className="w-100"
                    />
                    <div className="carousel-caption">
                      <h2 data-animation="animated fadeInRight">
                        <span>Remarkable</span>
                      </h2>
                      <h2 data-animation="animated fadeInRight">
                        <span>Digital agency</span>
                      </h2>
                      <a
                        href="#!"
                        className="carousel-item-link"
                        data-animation="animated fadeInRight"
                      >
                        EXPLORE PROJECT
                      </a>
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
                  <span className="number">01</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="ollez"
                    height="12px"
                  />
                </div>
                <div className="row landing-about-content wow fadeInUp">
                  <div className="col-md-6">
                    <h2>We help and solve your business problem.</h2>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio corporis delectus dolorem possimus, dolor
                      rerum.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 landing-about-feature wow fadeInUp">
                    <img
                      src="assets/images/icon_1.svg"
                      alt="document"
                      className="about-feature-icon"
                    />
                    <h5 className="about-feature-title">Market Research</h5>
                    <p className="about-feature-description">
                      Lorem Ipsum is simply text the printing and typesetting
                      standard industry.
                    </p>
                  </div>
                  <div className="col-md-4 landing-about-feature wow fadeInUp">
                    <img
                      src="assets/images/icon_2.svg"
                      alt="document"
                      className="about-feature-icon"
                    />
                    <h5 className="about-feature-title">Wireframe/Sketch</h5>
                    <p className="about-feature-description">
                      Lorem Ipsum is simply text the printing and typesetting
                      standard industry.
                    </p>
                  </div>
                  <div className="col-md-4 landing-about-feature wow fadeInUp">
                    <img
                      src="assets/images/icon_3.svg"
                      alt="document"
                      className="about-feature-icon"
                    />
                    <h5 className="about-feature-title">Creative Design</h5>
                    <p className="about-feature-description">
                      Lorem Ipsum is simply text the printing and typesetting
                      standard industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="oleez-landing-section oleez-landing-section-projects">
            <div className="container">
              <div className="oleez-landing-section-content">
                <div className="oleez-landing-section-verticals wow fadeIn">
                  <span className="number">02</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="oleez"
                    height="12px"
                  />
                </div>
                <h2 className="section-title wow fadeInUp">
                  Latest Projects{" "}
                  <a href="#!" className="all-projects-link">
                    View All
                  </a>
                </h2>
                <div className="landing-projects-carousel wow fadeIn">
                  <div className="card landing-project-card">
                    <img
                      src="assets/images/Project_1@2x.jpg"
                      className="card-img"
                      alt="Project 1"
                    />
                    <div className="card-img-overlay">
                      <h6 className="project-category">Branding</h6>
                      <h5 className="project-title">BootstrapDash</h5>
                    </div>
                  </div>
                  <div className="card landing-project-card">
                    <img
                      src="assets/images/Project_2@2x.jpg"
                      className="card-img"
                      alt="Project 1"
                    />
                    <div className="card-img-overlay">
                      <h6 className="project-category">Branding</h6>
                      <h5 className="project-title">BootstrapDash</h5>
                    </div>
                  </div>
                  <div className="card landing-project-card">
                    <img
                      src="assets/images/Project_3@2x.jpg"
                      className="card-img"
                      alt="Project 1"
                    />
                    <div className="card-img-overlay">
                      <h6 className="project-category">Branding</h6>
                      <h5 className="project-title">BootstrapDash</h5>
                    </div>
                  </div>
                  <div className="card landing-project-card">
                    <img
                      src="assets/images/Project_4@2x.jpg"
                      className="card-img"
                      alt="Project 1"
                    />
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
                  <span className="number">03</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="ollez"
                    height="12px"
                  />
                </div>
                <div className="row landing-team-content wow fadeInUp">
                  <div className="col-md-6">
                    <h2 className="section-title">
                      Meet The Team <br /> Our Professionals
                    </h2>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio corporis delectus dolorem possimus, dolor
                      rerum.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                    <img
                      src="assets/images/Team_3@2x.jpg"
                      alt="Team Member"
                      className="team-card-img"
                    />
                    <h5 className="team-card-name">Siri Jakobsson</h5>
                    <p className="team-card-job">Web Developer</p>
                    <nav className="team-card-social-links">
                      <a href="#!">Fb</a>
                      <a href="#!">Tw</a>
                      <a href="#!">In</a>
                    </nav>
                  </div>
                  <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                    <img
                      src="assets/images/Team_2@2x.jpg"
                      alt="Team Member"
                      className="team-card-img"
                    />
                    <h5 className="team-card-name">Arend Pellewever</h5>
                    <p className="team-card-job">Founder</p>
                    <nav className="team-card-social-links">
                      <a href="#!">Fb</a>
                      <a href="#!">Tw</a>
                      <a href="#!">In</a>
                    </nav>
                  </div>
                  <div className="col-md-4 mb-5 mb-md-0 landing-team-card wow flipInY">
                    <img
                      src="assets/images/Team_1@2x.jpg"
                      alt="Team Member"
                      className="team-card-img"
                    />
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
                  <span className="number">04</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="ollez"
                    height="12px"
                  />
                </div>
                <h2 className="section-title mb-1 wow fadeInUp">
                  Partners & clients
                </h2>
                <p className="client-section-subtitle">
                  We’re constantly refining our product. Adding new features.
                  Working to help your business grow.
                </p>
                <div className="row">
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_4.png"
                        alt="client"
                        height="50px"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_2.png"
                        alt="client"
                        height="50px"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_1.png"
                        alt="client"
                        height="50px"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_6.png"
                        alt="client"
                        height="50px"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_3.png"
                        alt="client"
                        height="50px"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 client-logo-wrapper wow flipInX">
                    <div className="client-logo">
                      <img
                        src="assets/images/client_5.png"
                        alt="client"
                        height="50px"
                      />
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
                  <span className="number">05</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="ollez"
                    height="12px"
                  />
                </div>
                <h2 className="section-title wow fadeInUp">
                  Recent News & Stories.
                </h2>
                <p className="news-section-subtitle wow fadeInUp">
                  Share your stories and news with everyone.
                </p>
                <div className="row">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="news-card news-card-1 wow fadeInUp">
                      <div className="card-body">
                        <div className="author-info media">
                          <img
                            src="assets/images/Team_1_Copy_2@2x.jpg"
                            alt="author"
                            className="author-avatar"
                          />
                          <div className="media-body">
                            <h6 className="author-name">Posted by Colabrio</h6>
                            <p className="news-post-date">July 5, 2019</p>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="post-category">
                            Digital Strategy
                          </span>{" "}
                          4 min read
                        </div>
                        <h5 className="post-title">
                          The Ultimate Guide to Make Your WordPress Journal.
                        </h5>
                        <a href="#!" className="post-permalink">
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="news-card news-card-2 wow fadeInUp">
                      <div className="card-body">
                        <div className="author-info media">
                          <img
                            src="assets/images/Team_2_Copy_2@2x.jpg"
                            alt="author"
                            className="author-avatar"
                          />
                          <div className="media-body">
                            <h6 className="author-name">Posted by Stormie</h6>
                            <p className="news-post-date">July 5, 2019</p>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="post-category">Personal</span> 4 min
                          read
                        </div>
                        <h5 className="post-title">
                          The Highly Contemporary UI/UX Design from a london.
                        </h5>
                        <a href="#!" className="post-permalink">
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="news-card news-card-3 wow fadeInUp">
                      <div className="card-body">
                        <div className="author-info media">
                          <img
                            src="assets/images/Team_3_Copy_2@2x.jpg"
                            alt="author"
                            className="author-avatar"
                          />
                          <div className="media-body">
                            <h6 className="author-name">Posted by Angela</h6>
                            <p className="news-post-date">July 5, 2019</p>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="post-category">Personal</span> 4 min
                          read
                        </div>
                        <h5 className="post-title">
                          A Color Exercise for our Brand’s Illustration{" "}
                        </h5>
                        <a href="#!" className="post-permalink">
                          Read more{" "}
                        </a>
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
                  <span className="number">05</span>{" "}
                  <img
                    src="assets/images/Logo_2.svg"
                    alt="ollez"
                    height="12px"
                  />
                </div>
                <div className="d-md-flex justify-content-between wow fadeInUp">
                  <div className="testimonial-section-content">
                    <h2 className="section-title">What our clients say</h2>
                    <p className="section-subtitle">
                      Share your stories and news with everyone.
                    </p>
                  </div>
                  <div className="testimonial-carousel-navbtn-wrapper"></div>
                </div>
                <div className="landing-testimonial-carousel wow fadeInUp">
                  <div className="landing-testimonial-card">
                    <div className="media">
                      <img
                        src="assets/images/Client_1@2x.jpg"
                        alt="client"
                        className="testimonial-card-img"
                      />
                      <div className="media-body">
                        <p className="testimonial-card-content">
                          The revulsion in our feelings was therefore all the
                          greater when the car suddenly escaped from this height
                          of desolation, and a magnificent prospect burst upon
                          our view.
                        </p>
                        <h6 className="testimonial-card-name">Winnie Warner</h6>
                        <p className="testimonial-card-company">
                          Creative Company
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="landing-testimonial-card">
                    <div className="media">
                      <img
                        src="assets/images/Client_2@2x.jpg"
                        alt="client"
                        className="testimonial-card-img"
                      />
                      <div className="media-body">
                        <p className="testimonial-card-content">
                          The revulsion in our feelings was therefore all the
                          greater when the car suddenly escaped from this height
                          of desolation, and a magnificent prospect burst upon
                          our view.
                        </p>
                        <h6 className="testimonial-card-name">Wesley Ford</h6>
                        <p className="testimonial-card-company">
                          Creative Company
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="landing-testimonial-card">
                    <div className="media">
                      <img
                        src="assets/images/Client_3@2x.jpg"
                        alt="client"
                        className="testimonial-card-img"
                      />
                      <div className="media-body">
                        <p className="testimonial-card-content">
                          The revulsion in our feelings was therefore all the
                          greater when the car suddenly escaped from this height
                          of desolation, and a magnificent prospect burst upon
                          our view.
                        </p>
                        <h6 className="testimonial-card-name">Winnie Warner</h6>
                        <p className="testimonial-card-company">
                          Creative Company
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="landing-testimonial-card">
                    <div className="media">
                      <img
                        src="assets/images/Client_4@2x.jpg"
                        alt="client"
                        className="testimonial-card-img"
                      />
                      <div className="media-body">
                        <p className="testimonial-card-content">
                          The revulsion in our feelings was therefore all the
                          greater when the car suddenly escaped from this height
                          of desolation, and a magnificent prospect burst upon
                          our view.
                        </p>
                        <h6 className="testimonial-card-name">Wesley Ford</h6>
                        <p className="testimonial-card-company">
                          Creative Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Master;
