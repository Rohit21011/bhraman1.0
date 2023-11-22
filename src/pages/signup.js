import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/Input";

const Signup = () => {
    return (
       
<div className="flex justify-around h-screen items-center">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/3">
        <InputBox type="text" name="Name" placeholder="Enter your Name" />
        <InputBox type="number" name="Phone no" placeholder="Enter your Phone number" />
        <InputBox type="email" name="Email" placeholder="Enter your Email" />
        <InputBox type="password" name="Password" placeholder="Enter your Password" />
        <InputBox type="password" name="Password" placeholder="confirm your password" />
        <Button type="submit" name="Signup"/>
        <div className="text-center ">
           <p>Already register?</p> <Link to="/">Login</Link>
        </div>
        </form>
        
       </div>
    )
}
export default Signup;