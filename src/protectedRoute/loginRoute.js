import { Navigate, Outlet } from "react-router-dom";

const LoginRoute = ({ isLogin }) => {
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to={"/user/home"} />;
  }
};
export default LoginRoute;
