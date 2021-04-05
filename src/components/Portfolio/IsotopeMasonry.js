import React from "react";

import i1 from "../../assets/images/masonry-gallery-1-370x470.jpg";
import i2 from "../../assets/images/masonry-gallery-2-370x306.jpg";
import i3 from "../../assets/images/masonry-gallery-3-370x470.jpg";
import i4 from "../../assets/images/masonry-gallery-4-370x470.jpg";
import i5 from "../../assets/images/masonry-gallery-5-370x306.jpg";
import i6 from "../../assets/images/masonry-gallery-6-370x306.jpg";
import i7 from "../../assets/images/masonry-gallery-7-370x470.jpg";
import i8 from "../../assets/images/masonry-gallery-8-370x470.jpg";
import i9 from "../../assets/images/masonry-gallery-9-370x470.jpg";
import i10 from "../../assets/images/masonry-gallery-10-370x470.jpg";
import i11 from "../../assets/images/masonry-gallery-11-370x306.jpg";
import i12 from "../../assets/images/masonry-gallery-12-370x306.jpg";

class IsotopeMasonry extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default oh">
        <div className="container isotope-wrap offset-top-30">
          <div
            className="isotope row row-30"
            data-isotope-layout="masonry"
            data-isotope-group="portfolio"
            data-lightgallery="group"
          >
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a className="thumb-lol" href="single-portfolio.html">
                <img src={i1} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">iStep Corporate Event</h3>
                  <h4 className="thumbnail-caption">April 2018</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-secondary"
                href="single-portfolio.html"
              >
                <img src={i2} alt width={370} height={306} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">GMC Anniversary</h3>
                  <h4 className="thumbnail-caption">March 2018</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-tertiary thumbnail-lol-tertiary"
                href="single-portfolio.html"
              >
                <img src={i3} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">Wake Co. Masterclass</h3>
                  <h4 className="thumbnail-caption">February 2018 </h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a className="thumb-lol" href="single-portfolio.html">
                <img src={i4} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">Eventy Conference</h3>
                  <h4 className="thumbnail-caption">January 2018</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-secondary"
                href="single-portfolio.html"
              >
                <img src={i5} alt width={370} height={306} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">2Bank Social Event</h3>
                  <h4 className="thumbnail-caption">May 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-tertiary"
                href="single-portfolio.html"
              >
                <img src={i6} alt width={370} height={306} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">Techno Workshop</h3>
                  <h4 className="thumbnail-caption">December 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a className="thumb-lol" href="single-portfolio.html">
                <img src={i7} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">Hearst Conference</h3>
                  <h4 className="thumbnail-caption">November 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-secondary"
                href="single-portfolio.html"
              >
                <img src={i8} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">MDate Meeting</h3>
                  <h4 className="thumbnail-caption">October 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a className="thumb-lol" href="single-portfolio.html">
                <img src={i9} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">SubCo Global Event</h3>
                  <h4 className="thumbnail-caption">September 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a className="thumb-lol" href="single-portfolio.html">
                <img src={i10} alt width={370} height={470} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">JT Series Presentation</h3>
                  <h4 className="thumbnail-caption">August 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-secondary"
                href="single-portfolio.html"
              >
                <img src={i11} alt width={370} height={306} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">Modern Biz Workshop</h3>
                  <h4 className="thumbnail-caption">July 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 isotope-item">
              <a
                className="thumb-lol thumbnail-lol-tertiary"
                href="single-portfolio.html"
              >
                <img src={i12} alt width={370} height={306} />
                <div className="thumbnail-overlay" />
                <div className="thumbnail-description">
                  <h3 className="thumbnail-title">New Sound Conference</h3>
                  <h4 className="thumbnail-caption">June 2017</h4>
                </div>
              </a>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </section>
    );
  }
}

export default IsotopeMasonry;
