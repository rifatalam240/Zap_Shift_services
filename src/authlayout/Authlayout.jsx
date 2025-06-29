
import React from "react";
import { Outlet } from "react-router";
import authimg from "../assets/authImage.png/";
import Logo from "../logo/Logo";

const Authlayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 bg-white">
        <div className="mb-8">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Outlet />
        </div>
      </div>
      {/* Right: Illustration Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAFDF0] px-4 py-12">
        <img
          src={authimg}
          alt="Delivery Illustration"
          className="w-[80%] max-w-[420px] h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Authlayout;