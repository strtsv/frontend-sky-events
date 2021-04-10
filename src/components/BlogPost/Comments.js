import React from "react";

import i1 from "../../assets/images/comment-1-100x100.jpg";
import i2 from "../../assets/images/comment-2-100x100.jpg";

class Comments extends React.Component {
  render() {
    return (
      <section
        className="section section-lg bg-default wow fadeInDown"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-8">
              <h3>Comments</h3>
              <div className="comment-classic-group">
                {}
                <article className="comment-classic">
                  <img
                    className="comment-classic-image"
                    src={i1}
                    alt
                    width={100}
                    height={100}
                  />
                  <div className="comment-classic-main">
                    <p className="comment-classic-name heading-5">
                      Andrea Banks
                    </p>
                    <div className="comment-classic-text">
                      <p>
                        Ex duo nemore lobortis, saperet ceteros oporteat vim cu.
                        Vis in copiosae lobortis electram, expetenda intellegat
                        ex quo.
                      </p>
                    </div>
                    <ul className="comment-classic-meta">
                      <li>
                        <time className="comment-classic-time" dateTime={2018}>
                          July 17, 2018 at 11:29 am
                        </time>
                      </li>
                      <li>
                        <a className="comment-classic-reply" href="#">
                          Reply
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <div className="comment-classic-group">
                  {}
                  <article className="comment-classic">
                    <img
                      className="comment-classic-image"
                      src={i2}
                      alt
                      width={100}
                      height={100}
                    />
                    <div className="comment-classic-main">
                      <p className="comment-classic-name heading-5">
                        Jack Smith
                      </p>
                      <div className="comment-classic-text">
                        <p>
                          Maecenas nec odio et ante tincidunt tempus. Donec
                          vitae sapien ut libero venenatis faucibus.
                        </p>
                      </div>
                      <ul className="comment-classic-meta">
                        <li>
                          <time
                            className="comment-classic-time"
                            dateTime={2018}
                          >
                            July 17, 2018 at 11:30 am
                          </time>
                        </li>
                        <li>
                          <a className="comment-classic-reply" href="#">
                            Reply
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Comments;
