import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/Input";

const Login = () => {
  return (
    <>
      <div className="flex justify-around h-screen items-center">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/3">
          <InputBox
            type="email"
            name="Email"s
            placeholder="Enter your E-Email"
          />
          <InputBox
            type="email"
            name="Email"
            placeholder="Enter your E-Email"
          />

          <Button type="submit" name="Login" />
          <div className="text-center">
           <Link to="/signup">Create new Account</Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
