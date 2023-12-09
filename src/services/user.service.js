import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../firebase"
import { collection, doc, setDoc } from "firebase/firestore";

import { setIsLogin, setUserAuthToken } from "../store/user/userSlice";
import { useDispatch } from "react-redux";

export const userSignUp = async({email,password,username}) =>{
   
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
           email,
            password
          );
          await updateProfile(userCredentials.user, {
            displayName: username,
          }); 
          
         await setDoc(doc(collection(db,"user"), userCredentials.user.uid), {
          userId:userCredentials.user.uid,
          username: userCredentials.user.displayName,
          email: userCredentials.user.email,
          profilePicture:"",
          bio:"",
          followers:[],
          following:[],
        });
    }

export const userLogin = async({email,password}) => {
    
  return await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
}
