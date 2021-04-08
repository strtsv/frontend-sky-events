import React from "react";

import i from "../../assets/images/bg-about-01-1700x376.jpg";

class Bread extends React.Component {
  render() {
    return (
      <section
        className="section-xl context-dark bg-image-2"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="text-uppercase text-center">Blog Post</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bread;
