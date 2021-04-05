import React from "react";

import i from "../../assets/images/bg-header-01-2049x946.jpg";

class Solutions extends React.Component {
  render() {
    return (
      <section
        className="section-main context-dark bg-image"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h3
                className="text-uppercase font-weight-light text-spacing-6 wow fadeInRight"
                data-wow-delay=".2s"
              >
                the solutions of
              </h3>
              <h1 className="big text-uppercase">
                <span className="bg-element">t</span>
                <span className="bg-element-2">o</span>
                <span className="bg-element-3">m</span>
                <span className="bg-element-4">0</span>
                <span className="bg-element-5">r</span>
                <span className="bg-element-6">r</span>
                <span className="bg-element-7">0</span>
                <span className="bg-element-8">w</span>
              </h1>
            </div>
            <a
              className="wow fadeInRight button button-lg button-icon button-icon-left button-secondary button-ujarak"
              data-wow-delay=".2s"
              href="#"
            >
              <span className="icon mdi mdi-plus" />
              Learn more
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Solutions;
