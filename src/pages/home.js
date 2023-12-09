import { useEffect, useState } from "react";
import InputBox from "../components/Input";
import Posts from "../components/posts";
import { fetchAllPost} from "../services/fetchPost.service";
import { useSelector } from "react-redux";
// import { search } from "../services/search.service";

const Home = () => {
  const addPost = useSelector((state)=>state.post.addPost)
  const [post,setPost] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  
 useEffect(()=>{
  try{
    const fetch = async()=>{
     
      const data = await fetchAllPost()
      setPost(data)
    }
      fetch();
  }

catch(error){
alert(error)
}
   
 },[addPost])

//  useEffect(()=>{
//   try{
//   const searchUsers = async () => {

//     if (searchTerm.toString().trim() === '') {
//       setSearchResults([]);
//       return;
//     }
//     const searchList=await search(searchTerm);
//     setSearchTerm(searchList)
    
//   };
//   searchUsers();
// }
// catch(err){
// console.log(err)
// }

//  },[searchTerm])


  console.log(post)
  // console.log(searchResults)
  return (  
    <>
      <div className="sm:flex flex-row">
       

        <div className="flex flex-col lg:flex-row justify-center sm:ml-12">
          <div className="md:flex-grow mt-24 ">
            
            {
              post?.map((value)=>
               <Posts image={value.downloadURL}  caption={value.caption} location={value.location} followedUserId={value.userId} userName={value.userName}/>
              )
            }
        
          </div>
          <div className="sm:w-1/4">
            <div className="justify-around sm:block fixed top-0 sm:left-auto left-0 z-30 lg:w-1/2 sm:w-full w-full h-18 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="sm:w-3/5 sm:p-2 w-full p-4">
                <InputBox type="search" placeholder="Search"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
