import React from "react";

import i1 from "../../assets/images/post-modern-1-370x339.jpg";
import i2 from "../../assets/images/post-modern-2-370x339.jpg";
import i3 from "../../assets/images/post-modern-3-370x339.jpg";
import i4 from "../../assets/images/post-modern-4-370x376.jpg";

class LatestNews extends React.Component {
  render() {
    return (
      <section className="section section-lg">
        <h2
          className="text-uppercase text-center wow fadeInDown"
          data-wow-delay=".2s"
        >
          Latest News
        </h2>
        <div className="container isotope-wrap offset-top-30">
          <div
            className="row row-30 isotope posts-lists-masonry-3-cols"
            data-isotope-layout="masonry"
          >
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              {}
              <article
                className="post-quote post-minimal wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <div className="post-classic-date">
                  October 20, 2018 / <a href="blog-post.html">News</a>
                </div>
                <div className="post-classic-title">
                  How to Use Technology in Events and Stay Ahead
                </div>
                <a className="post-classic-link" href="blog-post.html">
                  +  LEARN MORE
                </a>
              </article>
            </div>
            {}
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              <article
                className="post-classic post-minimal wow fadeInUp"
                data-wow-delay=".1s"
              >
                <a href="blog-post.html">
                  <div className="media-link">
                    <img src={i1} alt width={370} height={339} />
                  </div>
                </a>
                <div className="post-classic-date">
                  October 20, 2018 / 
                  <a className="text-third" href="blog-post.html">
                    News
                  </a>
                </div>
                <div className="post-classic-title">
                  5 Simple Yet Forgotten Things to Do After an Event
                </div>
                <a className="post-classic-link" href="blog-post.html">
                  + LEARN MORE
                </a>
              </article>
            </div>
            {}
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              <article
                className="post-classic post-minimal wow fadeInRight"
                data-wow-delay=".1s"
              >
                <a href="blog-post.html">
                  <div className="media-link">
                    <img src={i2} alt width={370} height={339} />
                  </div>
                </a>
                <div className="post-classic-date">
                  October 20, 2018 / 
                  <a className="text-third" href="blog-post.html">
                    News
                  </a>
                </div>
                <div className="post-classic-title">
                  5 Things Organizers Overlook When Organizing an Event
                </div>
                <a className="post-classic-link" href="blog-post.html">
                  + LEARN MORE
                </a>
              </article>
            </div>
            {}
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              <article
                className="post-classic post-minimal wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <a href="blog-post.html">
                  <div className="media-link">
                    <img src={i3} alt width={370} height={339} />
                  </div>
                </a>
                <div className="post-classic-date">
                  October 20, 2018 / 
                  <a className="text-third" href="blog-post.html">
                    News
                  </a>
                </div>
                <div className="post-classic-title">
                  6 Tips to Avoid the Most Common Event Planning Mistakes
                </div>
                <a className="post-classic-link" href="blog-post.html">
                  + LEARN MORE
                </a>
              </article>
            </div>
            {}
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              <article className="post-picture post-minimal">
                <a href="blog-post.html">
                  <img src={i4} alt width={370} height={376} />
                  <span className="icon fa fa-instagram" />
                </a>
              </article>
              {}
            </div>
            <div className="col-md-6 col-lg-4 isotope-item" data-filter={0}>
              <article
                className="post-quote post-minimal wow fadeInRight"
                data-wow-delay=".1s"
              >
                <div className="post-classic-date">
                  October 20, 2018 / <a href="blog-post.html">News</a>
                </div>
                <div className="post-classic-title">
                  How to Find the Perfect Sponsor for Your Event
                </div>
                <a className="post-classic-link" href="blog-post.html">
                  +  LEARN MORE
                </a>
              </article>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNews;
