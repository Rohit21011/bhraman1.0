import { useEffect, useState } from "react";
import InputBox from "../components/Input";
import Posts from "../components/posts";
import { fetchAllPost } from "../services/fetchPost.service";
import { useSelector } from "react-redux";
import { searchUser } from "../services/search.service";
import { myTripPlans } from "../services/tripPlan.service";
import { HiOutlineUser } from "react-icons/hi2";

// import { search } from "../services/search.service";

const Home = () => {
  const addPost = useSelector((state) => state.post.addPost);
  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [getMyTripPlan,setMyTripPlan] = useState()
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    try {
      const fetch = async () => {
        const data = await fetchAllPost();
        const mytrip = await myTripPlans()
        setMyTripPlan(mytrip)
        setPost(data);
      };
      fetch();
    } catch (error) {
      alert(error);
    }
  }, [addPost]);

  const handleSerch = async (e) => {
    setSearchTerm(e.target.value);
    const result = await searchUser(searchTerm);
    setSearchResults(result);
  };

  return (
    <>
      <div className="sm:flex flex-row ">
        <div className="md:flex-grow mt-5 ">
          {post?.map((value) => (
            <Posts
              image={value.downloadURL}
              postId={value.id}
              caption={value.caption}
              moreDetails={value.moreDetails}
              location={value.location}
              followedUserId={value.userId}
              userName={value.userName}
            />
          ))}
        </div>
      </div>
      <div className="sm:w-1/4 flex flex-col">
        <div className="justify-around sm:block fixed top-0 sm:left-auto left-0 z-30 lg:w-1/2 sm:w-full w-full h-18 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          {/* <div className="sm:w-3/5 sm:p-2 w-full p-4">
            <InputBox
              type="search"
              value={searchTerm}
              onchange={handleSerch}
              placeholder="Find travel partner"
            />
          </div> */}
        </div>
        <div className="mt-20">
          {searchTerm
            ? searchResults.map((value, key) => (
                <p key={key}>{value.username}</p>
              ))
            : ""}
        </div>
        <div className="flex ml-5 fixed  top-20 items-center justify-center  rounded-3xl shadow-2xl  ">
  {getMyTripPlan && <div aria-label="card" className={`p-8 rounded-3xl bg-white lg:block hidden` } >
    <div aria-label="header" className="flex items-center space-x-2">
     <div className="flex">
     <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 shrink-0"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
      </svg>
      <div className="space-y-0.5 flex-1">
        <h3 className="font-medium text-lg tracking-tight text-gray-900 leading-tight">
          Current trip Plan
        </h3>
       <span><b>{getMyTripPlan?.location}</b></span>
       <div className="flex">
       <span>{getMyTripPlan?.startDate} to <span>{getMyTripPlan?.endDate}</span></span>
       
       </div>
       
       
       <div>{getMyTripPlan?.description}</div>
      </div>
     </div>
   
    </div>
    <div aria-label="content" className="mt-9 grid gap-2.5">
      <p className="border-b">members</p>
      {
        getMyTripPlan?.members.map((value,key)=>(
          <a href="#" key={key}>
        <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
          <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
           <HiOutlineUser fontSize="22px"/>
          </span>
          <div className="flex flex-col flex-1">
            <h3 className="text-sm font-medium">{value.userName}</h3>
            <div className="divide-x divide-gray-200 mt-auto">
              <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                {value.contact}
              </span>
              <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                {value.location}
              </span>
              <div className={`${isExpanded ? "h-auto" : "h-0 overflow-hidden"}`}>
              <p>{value.about}</p>
              </div>
            </div>
          </div>
          
          <svg 
          className="text-gray-800 underline mt-2"
          onClick={() => setIsExpanded(!isExpanded)}
            xmlns="http://www.w3.org/2000/svg"
          
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </div>
      </a>
        ))
      }
    
    </div>
 
  </div>} 
</div>

      </div>
    </>
  );
};

export default Home;
