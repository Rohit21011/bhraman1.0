import { useEffect, useState } from "react";
import InputBox from "../components/Input";

import Posts from "../components/posts";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import { fetchPost } from "../services/fetchPost.service";

const Home = () => {
  
  const [post,setPost] = useState([]);
 useEffect(()=>{
    const fetch = async()=>{
      const data = await fetchPost()
      setPost(data)
    }
      fetch();
 },[])
  console.log(post)
  return (
    <>
      <div className="sm:flex flex-row">
       

        <div className="flex flex-col lg:flex-row justify-center sm:ml-12">
          <div className="md:flex-grow mt-24 ">
            {
              post?.map((value)=>
               <Posts image={value.downloadURL} caption={value.caption} location={value.location}/>
              )
            }
            {/* <Posts />
            <Posts />
            <Posts /> */}
          </div>
          <div className="sm:w-1/4">
            <div className="justify-around sm:block fixed top-0  z-30 lg:w-1/2 sm:w-full w-full h-18 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="sm:w-3/5 sm:p-2 w-full p-4">
                <InputBox type="search" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
