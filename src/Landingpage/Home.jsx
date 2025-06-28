import React from "react";
import Logo from "../logo/Logo";
import Banner from "../Homelayout/Banner";
import HowItWorks from "../Homelayout/HowItWorks";
import OurServices from "../Homelayout/OurServices";
import Brands from "../Homelayout/Brands";
import WhyChoose from "../Homelayout/WhyChoose";
import Testimonials from "../Homelayout/Testimonials";
import FAQ from "../Homelayout/FAQ";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
