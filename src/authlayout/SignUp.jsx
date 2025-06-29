import React from "react";
import { useForm } from "react-hook-form";
import { data, NavLink, useNavigate } from "react-router";
import UseAuth from "./useauth/UseAuth";

const SignUp = () => {
  const { user, createuser, loading, sociallogin } = UseAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createuser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  const handlesigningoogle = () => {
    sociallogin()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white md:bg-[#FAFDF0] lg:bg-white lg:block">
      <div className="w-full max-w-md mx-auto px-4 py-8 md:bg-white md:rounded-2xl md:shadow-lg md:mt-0 md:mb-40 lg:bg-transparent lg:rounded-none lg:shadow-none lg:mt-0 lg:mb-0">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#03363D]">
          Create an Account
        </h1>
        <p className="mb-6 text-[#03363D] text-base md:text-[16px]">
          SignUp with Profast
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
          <div className="mb-4">
            <label className="block text-[#03363D] mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 focus:outline-none focus:border-[#CAEB66] bg-white"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#03363D] mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 focus:outline-none focus:border-[#CAEB66] bg-white"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label className="block text-[#03363D] mb-1 font-medium">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 focus:outline-none focus:border-[#CAEB66] bg-white"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 py-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 py-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-[#067A87] text-sm hover:underline">
              Forget Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#CAEB66] text-[#03363D] font-semibold py-2 rounded-md mb-4 hover:bg-[#b6d95a] transition"
          >
            SignUp
          </button>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm">
              Already have an account?
              <NavLink
                className="text-[#067A87] ml-1 font-semibold"
                to="/login"
              >
                Login
              </NavLink>
            </span>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-2 text-gray-400 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <button
            onClick={handlesigningoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#f3f6f4] border border-[#e5e5e5] rounded-md py-2 text-[#03363D] font-medium hover:bg-[#e0f7fa] transition"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            SignUP With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
