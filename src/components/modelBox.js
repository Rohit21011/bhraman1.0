import { useState } from "react";
import InputBox from "./Input";
import Button from "./Button";
import { addPost } from "../services/addPost.service";
import { useDispatch, useSelector } from "react-redux";
import { setAddPost } from "../store/post/postSlice";
import { updateUser } from "../services/updateUser.service";
import toast, { Toaster } from "react-hot-toast";

const ModelBox = ({close,btnName,CaptionPlaceHolder,isLocation,isUpdate,title}) => {

  const [file,setFile] = useState(null);
  const [location,setLocation] = useState("Nashik");
  const [caption,setCaption] = useState("hello nashik");
  const [loader,setLoader] = useState(false);
  const dispatch = useDispatch();
  const post = useSelector((state)=>state.post.addPost)
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (e) => {
    const filePreview= e.target.files[0];

    if (filePreview) {
      const reader = new FileReader();
      setFile(filePreview)
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(filePreview);
    }
  };
  const addNewPost = async() => {
    setLoader(true)
   await addPost(file,location,caption)
    dispatch(setAddPost(!post))
    setLoader(false)
    toast.success("Post Shared!")
  }
   const updateProfile = async () => {
    try{
      setLoader(true)
      await updateUser(file,caption)
      toast.success("Profile Update!")
     setLoader(false)
    }
    
    catch(err){
    toast.error(err.message)
    }
  } 
 
  return (
    <>
    
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-80 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-bold">{title}</h3>
              <Button
                click={close}
                name="x"
                customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
              />
            </div>
            {/*body*/}
            <div className="relative pl-0 pr-0 pt-3 flex-auto">
              <div className="ml-3">
              <InputBox
                type="file"
                lable={false}
                onchange={handleImageChange}
                customClass="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-slate-800 file:text-white hover:file:bg-slate-950 "
              />
              </div>
              {
                imagePreview &&                   <div
          
                className="relative overflow-hidden w-full mt-3 h-40 aspect-w-1 aspect-h-1"
              >
                <img
                  src={imagePreview}
                  className="object-cover w-full h-full"
                  alt="preview"
                />
              </div>
              } 
              <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows={3}
                  onChange={(e)=>setCaption(e.target.value)}
                  className="block w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
                  placeholder={CaptionPlaceHolder}
                  required=""
                  defaultValue={""}
                />
                {
                   isLocation && <InputBox
                    type="text"
                    placeholder="Location"
                    onchange={(e)=>setLocation(e.target.value)}
                    customClass="peer h-full w-full  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                }
                
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-around p-3 w-full border-t border-solid border-blueGray-200 rounded-b">
              <Button
                type="button"
                name={btnName}
                loader={loader} 
                customClass="text-white w-1/2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                click={isUpdate?updateProfile:addNewPost}
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModelBox
