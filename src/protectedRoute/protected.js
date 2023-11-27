import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


const Protected = ({isLogin}) => {
   
  if(isLogin){
return <Outlet/>
  }
  else{
return <Navigate to={"/login"}/>
  }
}
export default Protected;