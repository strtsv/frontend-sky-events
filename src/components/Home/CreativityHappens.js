import React from "react";
import $ from "jquery";

import p from "../../assets/images/bg-cta-1.jpg";

class CreativityHappens extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section className="section text-md-left">
        <section className="parallax-container" data-parallax-img={p} data-image-src={p}>
          <div className="parallax-content section-parallax-2">
            <div className="container">
              <div className="row justify-content-md-end">
                <div className="col-md-7 col-lg-6">
                  <div className="text-width-small">
                    <p className="parallax-text text-right oh">
                      <span
                        className="d-inline-block wow slideInDown"
                        data-wow-delay="0s"
                      >
                        Creative Event
                      </span>
                    </p>
                    <h2
                      className="parallax-title text-right text-spacing-75 wow fadeInRight"
                      data-wow-delay=".1s"
                    >
                      Management
                    </h2>
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

export default CreativityHappens;
