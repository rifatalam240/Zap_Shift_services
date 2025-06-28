import React from "react";
import Logo from "../logo/Logo";
import Banner from "../Homelayout/Banner";
import HowItWorks from "../Homelayout/HowItWorks";
import OurServices from "../Homelayout/OurServices";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
