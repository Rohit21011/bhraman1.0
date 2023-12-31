import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { MdOutlineTravelExplore } from "react-icons/md";

import ModelBox from "./modelBox";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { signOut } from "firebase/auth";
import { auth} from "../firebase";
import {
  setEmail,
  setIsLogin,
  setUserAuthToken,
  setUserName,
} from "../store/user/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const Logout = () => {
    signOut(auth);
    dispatch(setEmail(""));
    dispatch(setUserAuthToken(""));
    dispatch(setUserName(""));
    dispatch(setIsLogin(false));
  };
  
  return (
    <>
      {/* component */}
      <div className="sm:min-h-screen sm:flex sm:flex-col  sm:flex-auto  sm:text-gray-800 hidden">
        <div className="fixed flex flex-col  top-0 left-0 lg:w-64 bg-white h-full border-r ">
          <div className="flex items-center justify-center ">
            <img src={require("../assets/logo.png")} alt="logo"/>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex items-center justify-around">
            <ul className="flex flex-col w-52">
              <li className="mb-2">
                <Link
                  to="/user/home"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                >
                  <HiOutlineHome
                    fontSize="23px"
                    color="black"
                    className="inline-flex justify-center items-center ml-4"
                  />
                  <span className="ml-2 text-md tracking-wide text-black font-medium truncate">
                    Home
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/user/explore"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent  hover:border-gray-800  pr-6 rounded-md"
                >
                  <MdOutlineTravelExplore
                    fontSize="23px"
                    color="black"
                    className="inline-flex justify-center items-center ml-4"
                  />
                  <span className="ml-2 text-md tracking-wide text-black font-medium  truncate ">
                    Explore
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  onClick={() => setShowModal(true)}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                >
                  <HiOutlinePlusCircle
                    fontSize="23px"
                    color="black"
                    className="inline-flex justify-center items-center ml-4"
                  />
                  <span className="ml-2 text-md tracking-wide truncate text-black font-medium ">
                    Add Post
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/user/profile"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                >
                  <HiOutlineUser
                    fontSize="23px"
                    color="black"
                    className="inline-flex justify-center items-center ml-4"
                  />
                  <span className="ml-2 text-md tracking-wide truncate text-black font-medium ">
                    Profile
                  </span>
                </Link>
              </li>
              <li className="mb-2">
               
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  onClick={Logout}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                >
                  <HiOutlineArrowRightOnRectangle
                    fontSize="23px"
                    onClick={Logout}
                    color="black"
                    className="inline-flex justify-center items-center ml-4"
                  />
                  <span className="ml-2 text-md tracking-wide truncate text-black font-medium ">
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:hidden">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <div>
            <Link
              to="/user/home"
              className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
            >
              <HiOutlineHome
                fontSize="23px"
                color="black"
                className="inline-flex justify-center items-center ml-4"
              />
            </Link>
          </div>

          <div>
            <Link
              to="user/explore"
              className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
            >
              <MdOutlineTravelExplore
                fontSize="23px"
                color="black"
                className="inline-flex justify-center items-center ml-4"
              />
            </Link>
          </div>
          <div>
            <Link
              to="#"
              onClick={() => setShowModal(true)}
              className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
            >
              <HiOutlinePlusCircle
                fontSize="23px"
                color="black"
                className="inline-flex justify-center items-center ml-4"
              />
            </Link>
          </div>
          <div>
            <Link
              to="/user/profile"
              className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
            >
              <HiOutlineUser
                fontSize="23px"
                color="black"
                className="inline-flex justify-center items-center ml-4"
              />
            </Link>
          </div>
        </div>
      </div>
      {showModal ? <ModelBox close={() => setShowModal(false)} btnName="Share" isUpdate={false} CaptionPlaceHolder="Write a caption..." isLocation={true}/> : null}
    </>
  );
};
export default Navbar;
