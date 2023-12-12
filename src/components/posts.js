import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { connections } from "../services/connections.service";
import InputBox from "./Input";
import { likes } from "../services/likes.service";
import { BsHeart, BsHeartFill, BsInfoCircle } from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import ModelBox from "./modelBox";
import Button from "./Button";
import { addComment, getAllComments } from "../services/comments.service";

const Posts = ({
  image,
  postId,
  caption,
  location,
  userName,
  followedUserId,
}) => {
  const [model, setModel] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [getComments, setComments] = useState({});
  const [comment, setComment] = useState("");
  const [postInfoModel, setPostInfoModel] = useState(false);
  const [showCommentsModel, setShowCommentsModel] = useState(false);
  useEffect(() => {
    // Check local storage to see if the post is liked
  
    const fetch = async () => {
      
      const { getLikeStatus, getLikesCount } = await likes(
        postId,
        followedUserId
      );
      setIsLiked(getLikeStatus);
      setLikesCount(getLikesCount);
      const d =await getAllComments(postId)
      setComments(d)
    
    };
    fetch();
  }, []);

  const follow = () => {
    connections(followedUserId);
  };
  const handleLikes = async () => {
    const { getLikeStatus, getLikesCount } = await likes(
      postId,
      followedUserId
    );
    localStorage.setItem(`like${postId}`,true)
    setIsLiked(getLikeStatus);
    setLikesCount(getLikesCount);
  };
  const handleComments = () => {
    addComment(postId,comment)
    setComment("")
  };
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

 

  return (
    <>
      <div className="md:p-4 sm:block ">
        <div className="bg-white border-b  max-w-md">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://picsum.photos/id/1027/150/150"
                alt="bhraman1.0"
              />
              <div className="ml-3 ">
                <a
                  href="#"
                  className="text-sm font-semibold antialiased block leading-tight"
                >
                  {userName}
                </a>
                <span className="text-gray-600 text-xs block">{location}</span>
              </div>
            </div>
            <div className="text-lg font-semibold">
              <a href="#Follow" onClick={follow}>
                {userName !== auth.currentUser.displayName ? "Follow" : ""}
              </a>
            </div>
          </div>
          <img
            src={image}
            style={{ objectFit: "cover", height: "340px" }}
            width="100%"
            alt="bhraman1.0"
          />
          <div className="mx-4 mt-1 ">
            <div className="flex items-center justify-between ">
              <div className="flex flex- items-center gap-5 ">
                {/* likes */}
                {isLiked ? (
                  <BsHeartFill
                    fill="#e23b3b"
                    size="23px"
                    onClick={handleLikes}
                  />
                ) : (
                  <BsHeart
                    size="23px"
                    className="hover:text-gray-500"
                    onClick={handleLikes}
                  />
                )}

                {/* comments */}

                <TfiCommentsSmiley
                  className="hover:text-gray-500"
                  size="23px"
                  onClick={() => setShowCommentsModel(true)}
                />
              </div>

              {/* info*/}
              <div className="flex">
                <BsInfoCircle
                  size="23px"
                  onClick={() => setPostInfoModel(true)}
                />
              </div>
            </div>
            <p className="mt-1 font-semibold">{likesCount} likes</p>
            <p className="mt-0 text-sm">{caption}</p>
            <div className="flex justify-between">
              <InputBox
                type="text"
                value={comment?comment:""}
                placeholder="Add comment"
                onchange={handleInputChange}
                customClass="peer h-full w-full pt-2 border-blue-gray-200 bg-transparent   pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              {comment ? (
                <button
                  className="text-blue-400"
                  onClick={handleComments}
                >
                  Post
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {postInfoModel ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-80 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-bold">Post Details</h3>
                  <Button
                    click={() => setPostInfoModel(false)}
                    name="x"
                    customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
                  />
                </div>
                {/*body*/}
                <div className="relative pl-0 pr-0 pt-3 flex-auto"></div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}

      {showCommentsModel ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-80 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-bold">comments</h3>
                  <Button
                    click={() => setShowCommentsModel(false)}
                    name="x"
                    customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
                  />
                </div>
                {/*body*/}
                <div className="relative flex flex-col h-96 overflow-y-scroll pl-0 pr-0 pt-3 flex-auto">
                  
                    {
                      getComments.map((value,key)=>(
                        <div className="flex items-center flex-wrap  px-4 py-2 ">
                        <div>
                        {/* <img
                          src={require("../assets/profilePicture.jpg")}
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full mr-2"
                        /> */}
                        </div>
                        <div >
                          <span className="font-semibold">{value.userId}&nbsp;&nbsp;</span>
                          <span>  {value.comment}</span>
                        </div>
                        </div>
                      ))
                    }
                  
                
                  
                  {/* <div className="flex items-center bg-white p-4 rounded-lg shadow">
                    <img
                      src={require("../assets/profilePicture.jpg")}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                  
                      <p className="font-semibold">rpdeveloper</p>
                      <p>this is very amazing .i have never seen kind of scene</p>
                    <div>
                    
                  </div>
                  </div> */}
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Posts;
