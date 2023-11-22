import { useState } from "react";
import InputBox from "../components/Input";
import ModelBox from "../components/modelBox";

import Navbar from "../components/navbar";
import Posts from "../components/posts";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
     <>
      <div className="sm:flex flex-row ">
        <div className="sm:basis-1/4 basis-60">
        
          <Navbar />
        </div>  
        
           
        <div className="flex flex-col lg:flex-row justify-center sm:ml-12">
      <div className="md:flex-grow mt-24 ">
        <Posts />
        <Posts />
        <Posts />
        
      </div>
      <div className="sm:w-1/4">
        {/* Fixed search bar on larger screens */}
        <div className="justify-around sm:block fixed top-0  z-30 lg:w-1/2 sm:w-full w-full h-18 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="sm:w-3/5 sm:p-2 w-full p-4">
            <InputBox type="search" placeholder="Search" />

            </div>
          
        </div>
      </div>
      {/* Search bar for small screens (not fixed) */}
      
    </div>
        {/* <div className="flex md:flex-row md:justify-around flex-col-reverse justify-around sm:ml-12">
          <div className="md:basis-1/2 basis-full">
            <Posts />
            <Posts />
            <Posts />
          </div>
          <div className="md:basic-1/4 basic-full">
            <InputBox type="search" placeholder="seacrh" />
          </div>
        </div> */}
      </div>
    </>
  );
}
  
 
export default Home;
