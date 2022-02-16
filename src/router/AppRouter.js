import React from "react";
import { useSelector } from "react-redux";

import { getSlice } from "../store/todo";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { currentUser } = useSelector(getSlice);

  return <>{currentUser ? <PublicRoutes /> : <PrivateRoutes />}</>;
};

export default AppRouter;
