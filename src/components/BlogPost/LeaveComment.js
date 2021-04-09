import React from "react";

class LeaveComment extends React.Component {
  render() {
    return (
      <section
        className="section section-lg bg-default wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-8">
              <h3>Leave a Comment</h3>
              {}
              <form
                className="rd-form rd-mailform row-20"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-form-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" htmlFor="contact-form-name">
                    Name
                  </label>
                </div>
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-form-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="contact-form-email">
                    E-mail
                  </label>
                </div>
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-form-message">
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-form-message"
                    name="message"
                    data-constraints="@Required"
                    defaultValue={""}
                  />
                </div>
                <div className="form-wrap">
                  <button
                    className="button button-lg button-primary button-raven"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LeaveComment;
