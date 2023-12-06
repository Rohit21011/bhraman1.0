
import { Navigate, Outlet } from "react-router-dom";


const Dashboard = ({isLogin}) => {
   
  if(isLogin){
return <Outlet/>
  }
  else{
return <Navigate to={"/"}/>
  }
}
export default Dashboard;