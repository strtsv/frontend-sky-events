import React from "react";

import Header from "../components/Header";
import Solutions from "../components/Home/Solutions";
import NewWayTo from "../components/Home/NewWayTo";
import WeAre from "../components/Home/WeAre";
import OurWork from "../components/Home/OurWork";
import WeLoveOurClients from "../components/Home/WeLoveOurClients";
import PricingTables from "../components/Home/PricingTables";
import CreativityHappens from "../components/Home/CreativityHappens";
import Counter from "../components/Home/Counter";
import LatestNews from "../components/Home/LatestNews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Solutions />
      <NewWayTo />
      <WeAre />
      <OurWork />
      <WeLoveOurClients />
      <PricingTables />
      <CreativityHappens />
      <Counter />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
