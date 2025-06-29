import React from "react";
import { NavLink } from "react-router";
import Logo from "../logo/Logo";
import UseAuth from "../authlayout/useauth/UseAuth";

const links = (
  <>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <NavLink>Services</NavLink>
      <NavLink>Coverage</NavLink>
      <NavLink>Pricing</NavLink>
      <NavLink>About Us</NavLink>
      <NavLink>Be a Rider</NavLink>
    </div>
  </>
);

const Navbar = () => {
  const { user, loading, signout } = UseAuth();

  const handlesignout = () => {
    signout();
  };
  return (
    <div className="navbar bg-base-100 py-0 rounded-2xl shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{links}</li>
          </ul>
        </div>
        <div className="flex items-center justify-center mb-3 gap-2">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{links}</li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handlesignout} className="btn">
            LogOut
          </a>
        ) : (
          <NavLink to="/login" className="btn">
            SignIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
