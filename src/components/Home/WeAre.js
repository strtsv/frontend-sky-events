import React from "react";

class WeAre extends React.Component {
  render() {
    return (
      <section className="section section-secondary">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInRight"
            data-wow-delay=".2s"
          >
            What We  <span className="text-secondary">Offer</span>
          </h2>
          <div className="row row-30 offset-top-25">
            <div
              className="col-sm-6 col-lg-3 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-target-2" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Event Management</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  We have an extensive experience in providing quality event
                  management services.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInLeft">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-note-2" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Event Branding</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  We offer a variety of in-house event branding and strategy
                  services for modern companies.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInLeft">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-presentation-3" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Speaker Services</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Our team can coordinate speaker registration, schedule &
                  logistics with ease.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInLeft">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-partners" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Program Planning</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Helping you develop a quality program of your event to attract
                  more speakers & visitors.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInLeft">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-lightbulb-gears" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Volunteer Support</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Sky Events aims to understand a volunteer’s motives and
                  support them.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInRight">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-wallet" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Sponsorship Support</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Looking for establishing relationships with a sponsor for your
                  event? We can help you!
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInRight">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-time" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Social Events</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Our managers can also organize great and appealing social
                  events or fundraisers.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeInRight">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon mercury-icon-phone-24" />
                <h4 className="box-icon-modern-title">
                  <a href="single-service.html">Event Evaluation</a>
                </h4>
                <p className="box-icon-modern-text text-gray-600">
                  Analyzing your event to make sure your attendees come back
                  next year.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WeAre;
