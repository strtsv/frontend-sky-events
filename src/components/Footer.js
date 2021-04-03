import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic bg-gray-850">
        <div className="container">
          <h2
            className="text-uppercase text-white text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            contact us
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form
                className="rd-form rd-mailform rd-mailform-custom"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="row row-lg-30">
                  <div className="col-lg-12">
                    <div className="form-wrap">
                      <input
                        className="form-input form-input-2"
                        id="contact-name-3"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                      <label
                        className="form-label form-label-2"
                        htmlFor="contact-name-3"
                      >
                        Name <span className="text-fourth">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-wrap">
                      <input
                        className="form-input form-input-2"
                        id="contact-email-3"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                      <label
                        className="form-label form-label-2"
                        htmlFor="contact-email-3"
                      >
                        E-mail <span className="text-fourth">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-wrap">
                      <label
                        className="form-label form-label-2"
                        htmlFor="contact-message-3"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-input form-input-2"
                        id="contact-message-3"
                        name="message"
                        data-constraints="@Required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center offset-top-30">
                    <button
                      className="button-2 wow fadeInLeft button button-lg button-icon button-icon-left button-secondary button-ujarak"
                      data-wow-delay=".2s"
                      type="submit"
                    >
                      <span className="icon mdi mdi-plus" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <ul className="list-inline list-inline-sm footer-social-list">
                <li>
                  <a className="icon fa fa-linkedin" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-twitter" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-facebook" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-instagram" href="#" />
                </li>
              </ul>
              <p className="rights">
                <span>©  </span>
                <span className="copyright-year" />
                <span> </span>
                <span>Sky Events</span>
                <span>. </span>
                <span>All rights reserved</span>
                <span>. </span>
                <a href="#">Terms and Conditions</a>
                <span>. </span>
                <a href="privacy-policy.html">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
