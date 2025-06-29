import React, { use } from "react";
import { Authcontext } from "../Authcontext";

const UseAuth = () => {
  const authinfo = use(Authcontext);
  return authinfo;
};

export default UseAuth;
