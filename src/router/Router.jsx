import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../Landingpage/Home";
import Authlayout from "../authlayout/Authlayout";
import Login from "../authlayout/Login";
import SignUp from "../authlayout/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    children: [{ path: "/", index: true, Component: Home }],
  },
  {
    path: "/",
    Component: Authlayout,
    children: [
      { path: "/login", Component: Login },
      { path: "/signup", Component: SignUp },
    ],
  },
]);
