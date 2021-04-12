import React from "react";

class NewWayTo extends React.Component {
  render() {
    return (
      <section className="section-xxl bg-primary section-button-style">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-lg-6 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <h2 className="text-uppercase text-white text-lg-right offset-lg-right-30">
                We are a professional 
                <span className="text-third">Event Management </span>
                <span>Agency</span>
              </h2>
            </div>
            <div
              className="col-sm-12 col-lg-5 offset-lg-left-50 offset-top-20-lg-0 wow fadeInRight text-border"
              data-wow-delay=".2s"
            >
              <p className="font-weight-ubold">
                Sky Events agency was created by pairing together our passion
                for business to organize great events.
              </p>
              <p>
                We bring a fresh, unique approach to the event management
                industry. Our team understands that a properly executed event
                can be leveraged to support an organization’s strategic vision,
                incorporated into a company’s marketing plan, or used to build
                networks and client loyalty that are really priceless.
              </p>
            </div>
            <div className="button-style">
              <a
                className="wow fadeInLeft button button-lg button-icon button-icon-left button-secondary button-ujarak"
                data-wow-delay=".2s"
                href="#"
              >
                <span className="icon mdi mdi-plus" />
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewWayTo;
