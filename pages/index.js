import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construction Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="hero-wrap js-fullheight home">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
              <div className="col-lg-6 ftco-animate fadeInUp ftco-animated">
                <div className="mt-5">
                  <h1 className="mb-4">We Build Great Projects</h1>
                  <p className="mb-4">
                    Our goal is to meet the needs of clients through the
                    creation of distinctive and avant-garde works, able to
                    combine functionality, beauty and respect for the
                    environment. 
                    </p>
                  <p>
                    <Link href="/services" className="btn btn-primary">
                      Our Services
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
          <div className="container">
            <div className="row no-gutters d-flex">
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div className="media block-6 services d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span className="flaticon-engineer-1"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Eurosteel Technology Spa</h3>
                    <p>is a worldwide, leading company that provides special and innovative solutions for handling and lifting purposes. 
                      Our lengthy experience and valuable expertise enable us to be at the forefront of the special equipment field.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div className="media block-6 services services-2 d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span className="flaticon-worker-1"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Mission</h3>
                    <p>We aim at studying and designing the best tailor-made solutions so as to be a key partner in our customers’ challenges and projects. Our mission is to find the perfect way to do it, always and everywhere, with no limits.
We are by your side, worldwide.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div className="media block-6 services d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span className="flaticon-engineer"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Solutions</h3>
                    <p>Our team of engineers and experienced technicians constantly work to provide customized equipment, designed to meet the client’s specific needs. From the very standard to the most complex model, up to what is yet to be invented, we are ready to design and supply it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section" id="about-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="about-wrap img w-100">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-crane"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-5 pl-md-5">
                <div className="row justify-content-center mb-4 pt-md-4">
                  <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                    <span className="subheading">Welcome to Eurosteel</span>
                    <h2 className="mb-4">Eurosteel an industrial group</h2>
                    <div className="d-flex about">
                      <div className="icon">
                        <span className="flaticon-hammer"></span>
                      </div>
                      <h3>We're in this business since 1975 and We provide the best insdustrial services</h3>
                    </div>
                    <p>
                    Eurosteel operates worldwide in the design, supply and erection of complex steel structures ranging from bridges and stadiums, to architecturally complex buildings and structures for the Off-shore and Oil & Gas sectors, these being either commodities (pipes, plate girders, etc..) or complete assemblies (modules, platforms, pressure vessels, etc.).
                    </p>
                    <div className="d-flex video-image align-items-center mt-md-4">
                      <a href="#" className="video img d-flex align-items-center justify-content-center">
                        <span className="fa fa-play-circle"></span>
                      </a>
                      <h4 className="ml-4">This is how we work on our clients, Watch video</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-intro">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <div className="img intro">
                  <div className="overlay"></div>
                  <h2>TECHNICAL AND COMMERCIAL ASSISTANCE</h2>
                  <p>We develop your projects looking for the most constructive and economical solution.</p>
                  <p className="mb-0">
                    <Link href="/contact" className="btn btn-primary px-4 py-3">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-half-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Our Services</span>
                <h2 className="mb-4">We Offer Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service1">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-architect"></span>
                    </div>
                    <h2>Pipes</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service2">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-worker"></span>
                    </div>
                    <h2>Energy</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service3">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-hammer"></span>
                    </div>
                    <h2>Special Envelopes</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-wrap ftco-animate fadeInUp ftco-animated service3">
                  <div className="img"></div>
                  <div className="text">
                    <div className="icon">
                      <span className="flaticon-hammer"></span>
                    </div>
                    <h2>Heavy Lift</h2>
                    <p>Eurosteel develops your projects looking for the most constructive and economical solution.</p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter">
          <div className="img image-overlay"></div>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 py-5 bg-secondary aside-stretch">
                <div className="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5">
                  <span className="subheading">Eurosteel A Construction Company</span>
                  <h2 className="mb-4">Best Provider for Industrial Services</h2>
                  <h4>We operate worldwide in the design, supply and erection of complex steel structures ranging from bridges and stadiums, to architecturally complex buildings and structures for the Off-shore and Oil & Gas sectors, these being either commodities</h4>
                  <p>
                  We operate worldwide in the design, supply and erection of complex steel structures ranging from bridges and stadiums, to architecturally complex buildings and structures for the Off-shore and Oil & Gas sectors, these being either commodities (pipes, plate girders, etc..) or complete assemblies (modules, platforms, pressure vessels, etc.)
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="row">
                  <div className="col-md-12 d-flex counter-wrap ftco-animate fadeInUp ftco-animated">
                    <div className="block-18 bg-primary d-flex align-items-center justify-content-between">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-engineer"></span>
                      </div>
                      <div className="text">
                        <strong className="number" data-number="48000">
                          48,000
                        </strong>
                        <span>Project Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex counter-wrap ftco-animate fadeInUp ftco-animated">
                    <div className="block-18 d-flex align-items-center justify-content-between">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-worker-1"></span>
                      </div>
                      <div className="text">
                        <strong className="number" data-number="54900">
                          54,900
                        </strong>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Our Global Work Industries</span>
                <h2 className="mb-4">Latest Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project">
                  <a href="images/project-1.jpg" className="img image-popup d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center mb-5">
                      <span className="fa fa-plus"></span>
                    </div>
                  </a>
                  <div className="text">
                    <span className="subheading">ENGINEERING</span>
                    <h3>Engineering test project</h3>
                    <p>
                      <span className="fa fa-map-marker mr-1"></span> Ismet Gusia 36, Tirane, Albania
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

<Footer/>
    </div>
  );
}
