import { useEffect, useState } from "react";
import { fetchUserPost, profile } from "../services/profile.service";
import { auth } from "../firebase";
import Button from "../components/Button";
import ModelBox from "../components/modelBox";
import {
  getFollowersList,
  getFollowingList,
  removeFollower,
  removeFollowing,
} from "../services/connections.service";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("post");
  const [postCount, setPostCount] = useState(0);
  const [followerList, setFollowerList] = useState();
  const [followingList, setFollowingList] = useState();
  const [model, setModel] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const getProfile = await profile(auth.currentUser.uid);
      const getPosts = await fetchUserPost(auth.currentUser.uid);
      const getFollowers = await getFollowersList();
      const getFollowing = await getFollowingList();
      setUserData(getProfile);
      setFollowerList(getFollowers);
      setFollowingList(getFollowing);

      setUserPosts(getPosts);
      setPostCount(getPosts.length);
    };
    fetch();
  }, [model, isRemove]);

  const handleRemoveFollower = async (userId) => {
    await removeFollower(userId);
    toast("Removed!", {
      style: {
        borderRadius: "18px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsRemove(!isRemove);
  };
  const handleRemoveFollowing = async (userId) => {
    await removeFollowing(userId);
    toast("Removed!", {
      style: {
        borderRadius: "15px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsRemove(!isRemove);
  };
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName="mb-12"
      />
      <div className=" lg:w-8/12 lg:mx-auto mb-8">
        <header className="flex flex-wrap items-center p-4 md:py-8">
          <div className="md:w-3/12 md:ml-16">
            {/* profile image */}
            <img
              className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
               border-2 border-gray-600 p-1"
              src={
                userData.profilePicture
                  ? userData.profilePicture
                  : require("../assets/profilePicture.jpg")
              }
              alt="profile"
            />
          </div>
          {/* profile meta */}
          <div className="w-8/12 md:w-7/12 ml-4">
            <div className="flex flex-wrap  mb-4">
              <h2 className="md:text-3xl text-2xl inline-block  md:mr-2 text-black font-bold mb-2 sm:mb-0">
                {userData?.username}
              </h2>
              {/* badge */}
              <span
                className="inline-block fas fa-certificate fa-lg text-blue-500 
                         relative mr-6 text-xl transform -translate-y-2"
                aria-hidden="true"
              >
                <i
                  className="fas fa-check text-white text-xs absolute inset-x-0
                         ml-1 mt-px"
                />
              </span>
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <Button
                  type="button"
                  name="Edit Profile"
                  customClass="text-white md:w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  click={() => setModel(true)}
                />
              </div>
              {model ? (
                <ModelBox
                  close={() => setModel(false)}
                  isLocation={false}
                  btnName="Update"
                  isUpdate={true}
                  title="Update post"
                  CaptionPlaceHolder="Write your Bio"
                />
              ) : null}
            </div>
            {/* post, following, followers list for medium screens */}
            <ul className="flex space-x-8 mb-4">
              <li>
                <span className=" text-black font-bold ">{postCount}</span>
                posts
              </li>
              <li>
                <span className="text-black font-bold ">
                  {userData?.followers?.length ?? 0}
                </span>
                followers
              </li>
              <li>
                <span className="text-black font-bold ">
                  {userData?.following?.length ?? 0}
                </span>
                following
              </li>
            </ul>
            {/* user meta form medium screens */}
            <div className="block">
              <h1 className="text-black font-bold ">{userData?.username}...</h1>

              <p>{userData?.bio}</p>
            </div>
          </div>
          {/* user meta form small screens */}
          {/* <div className="md:hidden text-sm my-2">
            <h1 className="text-black font-bold ">{userData?.username}...</h1>

            <p>{userData?.bio}</p>
          </div> */}
        </header>
        {/* posts */}
        <div className="px-px md:px-3">
          {/* user following for mobile only */}
          {/* <ul
            className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
          >
            <li>
              <span className="text-gray-800 block ">{postCount}</span>
              posts
            </li>
            <li>
              <span className="font-semibold text-gray-800 block ">
                {userData?.followers?.length ?? 0}
              </span>
              followers
            </li>
            <li>
              <span className="font-semibold text-gray-800 block">
                {userData?.following?.length ?? 0}
              </span>
              following
            </li>
          </ul> */}
          {/* insta freatures */}
          <ul
            className="flex items-center justify-around md:justify-center space-x-12  
              uppercase tracking-widest font-semibold text-xs text-gray-600
              border-t"
          >
            {/* posts tab is active */}
            <li
              className={
                activeTab === "post"
                  ? "border-t border-gray-700 -mt-px text-gray-700"
                  : ""
              }
            >
              <a
                className="inline-block p-3"
                href="#posts"
                onClick={() => setActiveTab("post")}
              >
                <span className="inline text-black font-bold">post</span>
              </a>
            </li>
            <li
              className={
                activeTab === "followers"
                  ? "border-t border-gray-700 -mt-px text-gray-700"
                  : ""
              }
            >
              <a
                className="inline-block p-3"
                href="#followers"
                onClick={() => setActiveTab("followers")}
              >
                <span className="inline text-black font-bold">followers</span>
              </a>
            </li>
            <li
              className={
                activeTab === "following"
                  ? "border-t border-gray-700 -mt-px text-gray-700"
                  : ""
              }
            >
              <a
                className="inline-block p-3"
                href="#following"
                onClick={() => setActiveTab("following")}
              >
                <span className="inline text-black font-bold">following</span>
              </a>
            </li>
          </ul>

          {activeTab === "post" && (
            <div className="container mx-auto md:p-4">
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {userPosts?.map((value, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden aspect-w-1 aspect-h-1"
                  >
                    <img
                      src={value.downloadURL}
                      className="object-cover w-full h-full"
                      alt={`userPost_${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "followers" && (
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 gap-4 ">
                {followerList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-white p-4 rounded-lg shadow"
                  >
                    <img
                      src={item.profilePicture}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-semibold">{item.username}</p>
                    </div>
                    <Button
                      type="button"
                      name="Remove"
                      click={() => handleRemoveFollower(item.userId)}
                      customClass="text-white ml-auto bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "following" && (
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 gap-4 ">
                {followingList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-white p-4 rounded-lg shadow"
                  >
                    <img
                      src={item.profilePicture}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-semibold">{item.username}</p>
                    </div>
                    <Button
                      type="button"
                      name="Remove"
                      click={() => handleRemoveFollowing(item.userId)}
                      customClass="text-white ml-auto bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
