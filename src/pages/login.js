import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/Input";
import { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { useDispatch, useSelector } from "react-redux";
import { isLogin, setEmail, setIsLogin, setPassword, setUserAuthToken, setUserName } from "../features/user/userSlice";
import { auth } from "../firebase";
import { useEffect } from "react";
import AlertMessage from "../components/alertMessage";

const Login = () => {
const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isHide, setHide] = useState(false);
  const [message,setMessage] = useState("")
  const [bgColor,setBgColor] = useState("")
  const [loader, setLoader] = useState(false);
  
const [user,setUser] = useState({
  email:'',
  password:''
})
const closeAlert = (e) => {
  e.preventDefault();
  
    setHide(false)
 

  }
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value
  }));
};
const submit = async(e) =>{
  e.preventDefault()
  setLoader(true);
  try{
    const userCredential = await signInWithEmailAndPassword(auth,user.email,user.password);
    dispatch(setUserAuthToken(userCredential.user.accessToken));
    dispatch(setIsLogin(true));
    setLoader(false)
  navigate("/user/home");
    console.log(userCredential.user.accessToken);
  }
  catch(error){
    setHide(true);
      setBgColor("bg-red-50");
      setMessage(error.message);
      setLoader(false)
    
  }
 
}
  return (
    <>
      <div className="flex justify-around h-screen items-center">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/3">
          <InputBox
            type="email"
            name="email"
            value={user.email}
            onchange={handleInputChange}
            placeholder="Enter your E-Email"
            lable="true"
          />
          <InputBox
            type="password"
            name="password"
            value={user.password}
            onchange={handleInputChange}
            placeholder="Enter your E-Email"
            lable="true"
          />
          <div className="mt-4">
            <Button  click={submit} loader={loader} name="Login" />
          </div>

          <div className="text-center">
            <Link to="/signup">Create new Account</Link>
          </div>
          <AlertMessage hide={isHide} message={message} bgColor={bgColor} click={closeAlert}/>
        </form>
      </div>
    </>
  );
};
export default Login;
