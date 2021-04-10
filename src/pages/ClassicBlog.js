import React from "react";

import Header from "../components/Header";
import Bread from "../components/ClassicBlog/Bread";
import Posts from "../components/ClassicBlog/Posts";
import Footer from "../components/Footer";

const ClassicBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Bread />
      <Posts />
      <Footer />
    </div>
  );
};

export default ClassicBlog;
