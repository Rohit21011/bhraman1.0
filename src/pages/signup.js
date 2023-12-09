import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";

import AlertMessage from "../components/alertMessage";
import { Firestore, addDoc, collection, doc, getDoc, getFirestore, query, setDoc, where } from "firebase/firestore";
import { userSignUp } from "../services/user.service";
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
      userSignUp(user)
   
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
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:w-2/5">
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
