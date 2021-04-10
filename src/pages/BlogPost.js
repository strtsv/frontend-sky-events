import React from "react";

import Header from "../components/Header";
import Bread from "../components/BlogPost/Bread";
import Content from "../components/BlogPost/Content";
import Comments from "../components/BlogPost/Comments";
import LeaveComment from "../components/BlogPost/LeaveComment";
import Footer from "../components/Footer";

const ClassicBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Bread />
      <Content />
      <Comments />
      <LeaveComment />
      <Footer />
    </div>
  );
};

export default ClassicBlog;
