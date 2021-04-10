import React from "react";

import Header from "../components/Header";
import Bread from "../components/Portfolio/Bread";
import IsotopeMasonry from "../components/Portfolio/IsotopeMasonry";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="page animated">
      <Header />
      <Bread />
      <IsotopeMasonry />
      <Footer />
    </div>
  );
};

export default Portfolio;
