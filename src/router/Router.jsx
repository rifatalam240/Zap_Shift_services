import {
  createBrowserRouter,
} from "react-router";
import Root from "../root/Root";
import Home from "../Landingpage/Home";
export const router = createBrowserRouter([
  {
    path: "/",


    Component: Root, children: [
      { path: "/", index: true, Component: Home }]
  }
]);