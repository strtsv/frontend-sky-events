import React from "react";

class PricingTables extends React.Component {
  render() {
    return (
      <section className="section-lg">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInDown"
            data-wow-delay=".2s"
          >
            Pricing tables
          </h2>
          <div className="row row-30 justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="box-pricing">
                <div className="box-pricing-body">
                  <div className="box-pricing-caption">
                    <h5 className="box-pricing-title">Basic</h5>
                    <h3 className="box-pricing-price wow fadeInDown">
                      <span className="light">$ </span>
                      <span className="bold">29</span>
                      <span className="light">.00</span>
                    </h3>
                  </div>
                  <ul className="box-pricing-list wow fadeInDown">
                    <li>Event Management</li>
                    <li>Social Events</li>
                    <li>Speaker Management</li>
                    <li>Program Development</li>
                  </ul>
                </div>
                <a
                  className="wow fadeInDown button button-lg button-icon button-icon-left button-secondary button-ujarak"
                  data-wow-delay=".2s"
                  href="#"
                >
                  <span className="icon mdi mdi-plus" />
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="box-pricing box-pricing-popular">
                <div className="box-pricing-body">
                  <div className="box-pricing-caption">
                    <h5 className="box-pricing-title">Standard</h5>
                    <h3 className="box-pricing-price wow fadeInDown">
                      <span className="light">$ </span>
                      <span className="bold">49</span>
                      <span className="light">.00</span>
                    </h3>
                  </div>
                  <ul className="box-pricing-list wow fadeInDown">
                    <li>Event Branding</li>
                    <li>Corporate Events</li>
                    <li>Sponsorship Support</li>
                    <li>Volunteer Support</li>
                  </ul>
                </div>
                <a
                  className="wow fadeInDown button button-lg button-icon button-icon-left button-third button-ujarak"
                  data-wow-delay=".2s"
                  href="#"
                >
                  <span className="icon mdi mdi-plus" />
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="box-pricing">
                <div className="box-pricing-body">
                  <div className="box-pricing-caption">
                    <h5 className="box-pricing-title">Premium</h5>
                    <h3 className="box-pricing-price wow fadeInDown">
                      <span className="light">$ </span>
                      <span className="bold">79</span>
                      <span className="light">.00</span>
                    </h3>
                  </div>
                  <ul className="box-pricing-list wow fadeInDown">
                    <li>Event coordination</li>
                    <li>Networking Events</li>
                    <li>Event Evaluation</li>
                    <li>On-Site Management</li>
                  </ul>
                </div>
                <a
                  className="wow fadeInDown button button-lg button-icon button-icon-left button-secondary button-ujarak"
                  data-wow-delay=".2s"
                  href="#"
                >
                  <span className="icon mdi mdi-plus" />
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingTables;
