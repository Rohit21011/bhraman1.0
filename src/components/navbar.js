import { Link } from "react-router-dom";
import { HiOutlineCog, HiOutlineHome, HiOutlinePlusCircle, HiOutlineSearch, HiOutlineUser} from "react-icons/hi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2"
import ModelBox from "./modelBox";
import { useState } from "react";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    
    <>
    
  {/* component */}
  <div className="sm:min-h-screen sm:flex sm:flex-col  sm:flex-auto  sm:text-gray-800 hidden">
    <div className="fixed flex flex-col  top-0 left-0 lg:w-64 bg-white h-full border-r ">
      <div className="flex items-center justify-center ">
      <img src={require("../assets/logo.png")} />
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex items-center justify-around">
        <ul className="flex flex-col w-52">
          <li className="mb-2">
            
            <Link to="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineHome fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
               Home
              </span>
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/search" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent  hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineSearch fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
               search
              </span>
            </Link>
          
          </li>
          <li className="mb-2">
          <Link to="" onClick={() => setShowModal(true)} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlinePlusCircle fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
              Add Post
              </span>
             
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/profile" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineUser fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
             Profile
              </span>
            </Link>  
          </li>
          <li className="mb-2">
          <Link to="/settings" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineCog fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
              Settings
              </span>
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/logout" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineArrowRightOnRectangle fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            <span className="ml-2 text-md tracking-wide truncate">
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
   <Link to="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineHome fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            
      </Link>
   </div>
      
   <div>
   <Link to="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineSearch fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            
      </Link>
   </div>
   <div>
   <Link to="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlinePlusCircle fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            
      </Link>
   </div>
   <div>
   <Link to="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border- border-transparent hover:border-gray-800  pr-6 rounded-md">
            <HiOutlineUser fontSize="23px" className="inline-flex justify-center items-center ml-4"/>
            
      </Link>
   </div>
  
  </div>
</div>
{showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
</>



  
  )
};
export default Navbar;
