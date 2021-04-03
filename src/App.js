import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Gallery from "./pages/Gallery";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
import ClassicBlog from "./pages/ClassicBlog";
import BlogPost from "./pages/BlogPost";
// import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/portfolio.html" component={Portfolio} />
      {/* <Route exact path="/contact-us.html" component={Contact} /> */}
      {/* <Route exact path="/our-team.html" component={Team} /> */}
      {/* <Route exact path="/gallery.html" component={Gallery} /> */}
      {/* <Route exact path="/testimonials.html" component={Testimonials} /> */}
      <Route exact path="/blog-post.html" component={BlogPost} />
      <Route exact path="/classic-blog.html" component={ClassicBlog} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
