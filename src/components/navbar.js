  import { NavLink } from "react-router-dom";
  import {
    HiOutlineHome,
    HiOutlinePlusCircle,
    HiOutlineUser,
  } from "react-icons/hi";
  import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
  import { MdOutlineTravelExplore } from "react-icons/md";
  import { TbRoute } from "react-icons/tb";
  import ModelBox from "./modelBox";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { signOut } from "firebase/auth";
  import { auth} from "../firebase";
  import {
    setEmail,
    setIsLogin,
    setUserAuthToken,
    setUserName,
  } from "../store/user/userSlice";
  import Button from "./Button";
  import InputBox from "./Input";
  import { tripPlan } from "../services/tripPlan.service";
  import toast, { Toaster } from "react-hot-toast";
  import { newTripStatus } from "../store/trip/tripSlice";
  const Navbar = () => {
    const dispatch = useDispatch();
    const tripStatus = useSelector((state)=>state.trip.isNewTripAdded)
    const [showModal, setShowModal] = useState(false);
    const [showTripModel,setShowTripModel] = useState(false)
    const [tripDetails,setTripdetails] = useState({})
    const Logout = () => {
      signOut(auth);
      dispatch(setEmail(""));
      dispatch(setUserAuthToken(""));
      dispatch(setUserName(""));
      dispatch(setIsLogin(false));
    };
    
    const makeTripPlan = async() => {

    try{
      await tripPlan(tripDetails)
      dispatch(newTripStatus(!tripStatus))
      toast.success("trip plan added successfully")
    }
      catch(err){
        toast.error("please fill valid data")
      }
    }
    const handleMoreDetails = (e) => {
  setTripdetails((prevUser)=>({
    ...prevUser,
    [e.target.name]:e.target.value
  }))
    }
    return (
      <>
        {/* component */}

        <Toaster/>
        <div className="sm:min-h-screen sm:flex sm:flex-col  sm:flex-auto  sm:text-gray-800 hidden">
          <div className="fixed flex flex-col  top-0 left-0 lg:w-64 bg-white h-full border-r ">
            <div className="flex items-center justify-center ">
              <img src={require("../assets/logo.png")} alt="logo"/>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex items-center justify-around">
              <ul className="flex flex-col w-52">
                <li className="mb-2">
                  <NavLink
                    to="/user/home"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 text-gray-800 border- border-transparent border-gray-800  pr-6 rounded-md"
                  
                  >
                    <HiOutlineHome
                      fontSize="23px"
                      color="black"
                      className="inline-flex justify-center items-center ml-4"
                    />
                    <span className="ml-2 text-md tracking-wide text-black font-medium truncate">
                      Home
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
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
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
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
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="#tripPlan"
                    onClick={()=>setShowTripModel(true)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                  >
                    <TbRoute
                      fontSize="23px"
                      color="black"
                      className="inline-flex justify-center items-center ml-4"
                    />
                    <span className="ml-2 text-md tracking-wide truncate text-black font-medium ">
                      start A trip
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
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
                  </NavLink>
                </li>
                <li className="mb-2">
                
                </li>
                <li className="mb-2">
                  <NavLink
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
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:hidden">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
            <div>
              <NavLink
                to="/user/home"
                className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
              >
                <HiOutlineHome
                  fontSize="23px"
                  color="black"
                  className="inline-flex justify-center items-center ml-4"
                />
              </NavLink>
            </div>

            <div>
              <NavLink
                to="user/explore"
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
              >
                <MdOutlineTravelExplore
                  fontSize="23px"
                  color="black"
                  className="inline-flex justify-center items-center ml-4"
                />
              </NavLink>
            </div>
            <div>
              <NavLink
                to="#"
                onClick={() => setShowModal(true)}
                className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
              >
                <HiOutlinePlusCircle
                  fontSize="23px"
                  color="black"
                  className="inline-flex justify-center items-center ml-4"
                />
              </NavLink>
            </div>
            <div>
            <NavLink
                    to="#tripPlan"
                    onClick={()=>setShowTripModel(true)}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
                  >
                    <TbRoute
                      fontSize="23px"
                      color="black"
                      className="inline-flex justify-center items-center ml-4"
                    />
                  
                  </NavLink>
            </div>
            <div>
              <NavLink
                to="/user/profile"
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md"
              >
                <HiOutlineUser
                  fontSize="23px"
                  color="black"
                  className="inline-flex justify-center items-center ml-4"
                />
              </NavLink>
            </div>
          </div>
        </div>
        {showModal ? <ModelBox close={() => setShowModal(false)} btnName="Share" title="Add post" isUpdate={false} CaptionPlaceHolder="Write a caption..." isLocation={true}/> : null}
        {
          showTripModel &&  <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-80 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl font-bold">Start a trip</h3>
                <Button
                  click={()=>setShowTripModel(false)}
                  name="x"
                  customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
                />
              </div>
              {/*body*/}
              <div className="relative pl-0 pr-0 pt-3 flex-auto">
              <div className="px-6">
              <InputBox type="text" name="location" onchange={handleMoreDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={true} /> 
              <InputBox type="date" name="startDate" onchange={handleMoreDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="Start Date"/>
                  <InputBox type="date" name="endDate"  onchange={handleMoreDetails}  customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="End Date"/>
                  <InputBox type="text" name="from"  onchange={handleMoreDetails}  customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="From"/>
                  <InputBox type="number" name="contact" onchange={handleMoreDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="Contact no"/>
                  <InputBox type="text" name="description"  onchange={handleMoreDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="description"/>

              </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-around p-3 w-full border-t border-solid border-blueGray-200 rounded-b">
                <Button
                  type="button"
                  name="Make trip Plan"
                  customClass="text-white w-1/2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  click={makeTripPlan}
                />
              
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

            
          
        }
      </>
    );
  };
  export default Navbar;
