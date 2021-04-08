import React from "react";

import i1 from "../../assets/images/blog-post-1-770x500.jpg";
import i2 from "../../assets/images/blog-post-2-770x500.jpg";
import i3 from "../../assets/images/post-author-180x180.jpg";

class Content extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-9 col-xl-8">
              {}
              <article className="post-single">
                <h3
                  className="post-single-title wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  5 Things Event Organizers Overlook
                </h3>
                <div className="post-single-meta">
                  <div className="badge">News</div>
                  <time className="post-single-time" dateTime={2018}>
                    July 11, 2018 at 10:41 am
                  </time>
                </div>
                <p>
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                  enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ultricies.
                </p>
                <img
                  className="wow fadeInLeft"
                  src={i1}
                  alt
                  width={770}
                  height={500}
                  data-wow-delay=".2s"
                />
                <p>
                  Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                  iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante
                  arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                  Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.
                  Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras
                  id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam
                  nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat.
                </p>
                <p>
                  Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in
                  justo pellentesque facilisis. Etiam imperdiet imperdiet orci.
                  Nunc nec neque.
                </p>
                <img
                  className="wow fadeInRight"
                  src={i2}
                  alt
                  width={770}
                  height={500}
                  data-wow-delay=".2s"
                />
                <p>
                  Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
                  nisi. Curabitur ligula sapien, tincidunt non, euismod vitae,
                  posuere imperdiet, leo. Maecenas malesuada. Praesent congue
                  erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                  vulputate arcu. Phasellus accumsan cursus velit. Vestibulum
                  ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit.
                </p>
                <p>
                  Erat euismod orci, ac placerat dolor lectus quis orci.
                  Phasellus consectetuer vestibulum elit. Aenean tellus metus,
                  bibendum sed, posuere ac, mattis non, nunc.
                </p>
                <div className="post-single-footer group-middle">
                  <h5>Share this post</h5>
                  <div>
                    <div className="group group-middle">
                      <a
                        className="link-social-1 icon mdi mdi-facebook"
                        href="#"
                      />
                      <a
                        className="link-social-1 icon mdi mdi-linkedin"
                        href="#"
                      />
                      <a
                        className="link-social-1 icon mdi mdi-google"
                        href="#"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-xl-4">
              {}
              <article className="box-info">
                <h3 className="box-info-title">Author</h3>
                <div className="box-info-inner">
                  <img
                    className="box-info-avatar"
                    src={i3}
                    alt
                    width={180}
                    height={180}
                  />
                  <div className="box-info-main">
                    <h5 className="box-info-caption">Jack Smith</h5>
                    <p>
                      Lorem ipsum dolor sit amet, civibus perfecto ei nec, pro
                      ignota oporteat ullamcorpe.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
