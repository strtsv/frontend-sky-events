import React from "react";
import $ from "jquery";

import p from "../../assets/images/bg-cta-2-1700x266.jpg";

class Counter extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section className="section">
        <section className="parallax-container" data-parallax-img={p} data-image-src={p}>
          <div className="parallax-content section-sm">
            <div className="container wow fadeInLeft" data-wow-delay=".1s">
              <div className="row row-50 justify-content-center border-classic">
                <div className="col-sm-6 col-md-5 col-lg-3">
                  <div className="counter-classic">
                    <div className="counter-classic-number text-white">
                      <span className="counter">87</span>
                    </div>
                    <h5 className="counter-classic-title">AWARDS</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3">
                  <div className="counter-classic">
                    <div className="counter-classic-number text-white">
                      <span className="counter">197</span>
                    </div>
                    <h5 className="counter-classic-title">EVENTS</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3">
                  <div className="counter-classic">
                    <div className="counter-classic-number text-white">
                      <span className="counter">246</span>
                      <span className="symbol">k</span>
                    </div>
                    <h5 className="counter-classic-title">HAPPY CLIENTS</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3">
                  <div className="counter-classic">
                    <div className="counter-classic-number text-white">
                      <span className="counter">101</span>
                    </div>
                    <h5 className="counter-classic-title">PARTNERS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Counter;
