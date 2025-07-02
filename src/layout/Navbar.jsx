// import React from "react";
// import { NavLink } from "react-router";
// import Logo from "../logo/Logo";
// import UseAuth from "../authlayout/useauth/UseAuth";

// const links = (
//   <>
//     <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
//       <NavLink>Services</NavLink>
//       <NavLink to="/coverage">Coverage</NavLink>
//       <NavLink>Pricing</NavLink>
//       <NavLink>About Us</NavLink>
//       <NavLink>Be a Rider</NavLink>
//     </div>
//   </>
// );

// const Navbar = () => {
//   const { user, loading, signout } = UseAuth();

//   const handlesignout = () => {
//     signout();
//   };
//   return (
//     <div className="navbar bg-base-100 py-0 rounded-2xl shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             <li>{links}</li>
//           </ul>
//         </div>
//         <div className="flex items-center justify-center mb-3 gap-2">
//           <Logo></Logo>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>{links}</li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <a onClick={handlesignout} className="btn">
//             LogOut
//           </a>
//         ) : (
//           <NavLink to="/login" className="btn">
//             SignIn
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router";
import Logo from "../logo/Logo";
import UseAuth from "../authlayout/useauth/UseAuth";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const { user, loading, signout } = UseAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signout();
  };

  return (
    <nav className="bg-white rounded-2xl shadow-sm my-4  px-2 md:px-8 py-2 flex items-center justify-between font-urbanist">
      {/* Logo */}
      <div className="flex justify-center items-center pb gap-2">
        <Logo />
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex items-center gap-8 text-[#222] font-medium">
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coverage"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              Coverage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bearider"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              Be a Rider
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/sendpercel"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                  : "text-gray-500"
              }
            >
              Send A Percel
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side Auth Buttons */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex gap-2">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="px-6 py-2 rounded-xl border border-[#e5e5e5] bg-white font-semibold text-[#222] hover:bg-[#f5f7f8] transition"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="px-6 py-2 rounded-xl bg-[#CAEB66] font-semibold text-[#222] hover:bg-[#b6d95a] transition"
              >
                Sign Up
              </NavLink>
              <button
                onClick={() => navigate("/signup")}
                className="ml-1 bg-[#222] text-white rounded-full w-9 h-9 flex items-center justify-center"
                aria-label="Sign Up Arrow"
              >
                <FiArrowUpRight size={22} />
              </button>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="px-6 py-2 rounded-xl border border-[#e5e5e5] bg-white font-semibold text-[#222] hover:bg-[#f5f7f8] transition"
            >
              LogOut
            </button>
          )}
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-56 gap-2"
            >
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/coverage"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  Coverage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bearider"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  Be a Rider
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sendpercel"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#CAEB66] text-[#222] font-semibold px-5 py-1.5 rounded-full hover:bg-[#b6d95a] transition"
                      : "text-gray-500"
                  }
                >
                  Send A Percel
                </NavLink>
              </li>
              {!user ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="px-4 py-2 rounded-xl border border-[#e5e5e5] bg-white font-semibold text-[#222] hover:bg-[#f5f7f8] transition"
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className="px-4 py-2 rounded-xl bg-[#CAEB66] font-semibold text-[#222] hover:bg-[#b6d95a] transition"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 rounded-xl border border-[#e5e5e5] bg-white font-semibold text-[#222] hover:bg-[#f5f7f8] transition"
                  >
                    LogOut
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
