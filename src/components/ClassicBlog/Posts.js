import React from "react";

import i1 from "../../assets/images/blog-1-570x350.jpg";
import i2 from "../../assets/images/blog-2-570x350.jpg";
import i3 from "../../assets/images/blog-3-570x350.jpg";
import i4 from "../../assets/images/blog-4-570x350.jpg";
import i5 from "../../assets/images/blog-5-570x350.jpg";
import i6 from "../../assets/images/blog-6-570x350.jpg";

class Posts extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default text-center">
        <div className="container">
          <div className="row row-30 justify-content-center">
            <div
              className="col-sm-10 col-md-6 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i1 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      How to Use Technology in Events and Stay Ahead
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-sm-10 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i2 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      5 Simple Yet Forgotten Things to Do After an Event
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-sm-10 col-md-6 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i3 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      5 Things Event Organizers Overlook
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-sm-10 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i4 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      How to Avoid Event Planning Mistakes
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-sm-10 col-md-6 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i5 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      How to Find the Perfect Sponsor for Your Event
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-sm-10 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              {}
              <a
                className="post-light context-dark"
                href="blog-post.html"
                style={{
                  backgroundImage: "url(" + i6 + ")",
                }}
              >
                <div className="post-light-inner">
                  <div className="badge">News</div>
                  <div className="post-light-main">
                    <time className="post-light-time" dateTime={2018}>
                      July 5, 2018, at 12:07 pm
                    </time>
                    <h4 className="post-light-title">
                      Organizing & Coordinating a Social Event
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
