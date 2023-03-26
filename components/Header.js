import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { logo } from "../public/images/logo.jpg";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <div className="py-1 top">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
              <p className="mb-0 w-100">
                <span className="fa fa-paper-plane"></span>
                <span className="text">info@eurosteel.al</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
              <p className="mb-0 register-link">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-5">
        <div className="container">
          <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
            <div className="col-md-4 d-flex mb-2 mb-md-0">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <Image src="/images/logo.jpg" alt="Eurosteel shpk" width={61} height={70} />
                <span className="ml-2">
                  <small>Eurosteel shpk</small>
                </span>
                {/* <span className="flaticon flaticon-crane"></span>
                <span className="ml-2">
                  Wilcon <small>Construction Company</small>
                </span> */}
              </a>
            </div>
            <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-map"></span>
              </div>
              <div className="pr-md-4 pl-md-3 pl-3 text">
                <p className="con">
                  <span>Free Call</span> <span>+355 (0)69 60 28 431</span>
                </p>
                <p className="con">Call Us Now 24/7 Customer Support</p>
              </div>
            </div>
            <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane"></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="hr">
                  <span>Our Location</span>
                </p>
                <p className="con">Ismet Gusia 36, Tirane, Albania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </li>
                            <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
