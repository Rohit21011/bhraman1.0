import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setUserAuthToken,
  setUserName,
} from "../features/user/userSlice";
import AlertMessage from "../components/alertMessage";
const Signup = () => {
  const [isHide, setHide] = useState(false);
  const [message,setMessage] = useState("")
  const [bgColor,setBgColor] = useState("")
  const [loader, setLoader] = useState(false);
  const closeAlert = (e) => {
    e.preventDefault();
    
      setHide(false)
   
  
    }

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const register = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await updateProfile(userCredentials.user, {
        displayName: user.username,
      });
      dispatch(setEmail(user.email));
      dispatch(setPassword(user.password));
      dispatch(setUserName(user.username));

      setLoader(false);
      setHide(true);
      setBgColor("bg-green-50");
      setMessage("Congratulations! you have register successfully");
     
    } catch (error) {
      setHide(true);
      setBgColor("bg-red-50");
      setMessage(error.message);
      setLoader(false)
      
    }
  };
  return (
    <div className="flex justify-around h-screen items-center">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/3">
        <InputBox
          type="text"
          onchange={handleInputChange}
          name="username"
          value={user.username}
          placeholder="Enter your Username"
          lable="true"
        />
        <InputBox
          type="email"
          onchange={handleInputChange}
          name="email"
          value={user.email}
          placeholder="Enter your Email"
          lable="true"
        />
        <InputBox
          type="password"
          onchange={handleInputChange}
          name="password"
          value={user.password}
          placeholder="Enter your Password"
          lable="true"
        />
        <div className="mt-4">
          <Button
            type="submit"
            click={register}
            loader={loader}
            name="Signup"
          />
        </div>

        <div className="text-center ">
          <p>Already register?</p> <Link to="/">Login</Link>
        </div>
        
          <AlertMessage hide={isHide} message={message} bgColor={bgColor} click={closeAlert}/>
        
        
       
      </form>
    </div>
  );
};
export default Signup;
