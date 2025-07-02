import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../Landingpage/Home";
import Authlayout from "../authlayout/Authlayout";
import Login from "../authlayout/Login";
import SignUp from "../authlayout/SignUp";
import Coverage from "../routes/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcelForm from "../sendpercel/SendParcelForm";
export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "/coverage", Component: Coverage },
      {
        path: "/sendpercel",
        element: (
          <PrivateRoute>
            <SendParcelForm></SendParcelForm>
          </PrivateRoute>
        ),
        loader: () => fetch("./data/warehouses.json"),
      },
    ],
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
