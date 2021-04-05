import React from "react";
import OwlCarousel from "react-owl-carousel";

import i from "../../assets/images/bg-section-01-1700x638.jpg";

import i1 from "../../assets/images/user-01-100x100.png";
import i2 from "../../assets/images/user-02-100x100.png";
import i3 from "../../assets/images/user-03-100x100.png";
const options = {
  loop: true,
  autoplay: true,
  smartSpeed: 450,
  dots: false,
  dotsEach: 1,
  nav: false,
  items: 3,
  navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
};
class WeLoveOurClients extends React.Component {
  render() {
    return (
      <section
        className="section-lg bg-image-2"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            What Our <span className="text-third">Clients Say</span>
          </h2>
          {}
          <div
            className="owl-modern"
            // className="owl-carousel owl-modern"
            data-items={1}
            data-stage-padding={15}
            data-margin={30}
            data-dots="true"
            data-animation-in="fadeIn"
            data-animation-out="fadeOut"
            data-autoplay="false"
          >
            <OwlCarousel {...options}>
              {}
              <article className="quote-lisa">
                <div className="quote-lisa-body wow fadeInDown">
                  <div className="quote-lisa-text">
                    <p className="q">
                      "Thank you so much for all your hard work, your
                      flexibility and diligence in pulling together a very
                      successful event. We’ve had great feedback from our
                      clients, it has been considered a massive success all
                      round. It was a pleasure working with you. We hope to work
                      with you again in the future."
                    </p>
                  </div>
                  <a className="quote-lisa-figure" href="#">
                    <img src={i1} alt width={100} height={100} />
                  </a>
                  <h5 className="text-uppercase font-weight-medium text-third quote-lisa-cite">
                    <a href="#">Catherine Williams</a>
                  </h5>
                </div>
              </article>
              {}
              <article className="quote-lisa">
                <div className="quote-lisa-body wow fadeInDown">
                  <div className="quote-lisa-text">
                    <p className="q">
                      "Thank you for delivering inspiring new collection
                      launches across the country this year. The jewelry display
                      was unique and beautifully executed. We thank your team
                      for their innovative approach that was visually stunning
                      and allowed our guests to fall in love with the new
                      collection designs."
                    </p>
                  </div>
                  <a className="quote-lisa-figure" href="#">
                    <img src={i2} alt width={100} height={100} />
                  </a>
                  <h5 className="text-uppercase font-weight-medium text-third quote-lisa-cite">
                    <a href="#">Rupert Wood</a>
                  </h5>
                </div>
              </article>
              {}
              <article className="quote-lisa">
                <div className="quote-lisa-body wow fadeInDown">
                  <div className="quote-lisa-text">
                    <p className="q">
                      "I would like to thank you for all your hard work and
                      coordination in developing and delivering such a major
                      event. It was an absolute pleasure working with your
                      professional, dedicated and client-focused team. What you
                      were able to achieve in under seven weeks was nothing
                      short of amazing."
                    </p>
                  </div>
                  <a className="quote-lisa-figure" href="#">
                    <img src={i3} alt width={100} height={100} />
                  </a>
                  <h5 className="text-uppercase font-weight-medium text-third quote-lisa-cite">
                    <a href="#">Peter Brown</a>
                  </h5>
                </div>
              </article>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default WeLoveOurClients;
