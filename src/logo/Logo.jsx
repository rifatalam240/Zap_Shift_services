import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="h-[40px] mt-4" src={logo} alt="" />
      <p className="mt-8 -ml-6 font-extrabold">Profast</p>
    </div>
  );
};

export default Logo;
