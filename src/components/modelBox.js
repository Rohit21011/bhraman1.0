import { useState } from "react";
import InputBox from "./Input";
import Button from "./Button";

const ModelBox = ({ close }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-bold">Create new Posts</h3>
              <Button
                click={close}
                name="x"
                customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
              />
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <InputBox
                type="file"
                lable="false"
                customClass="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-slate-800 file:text-white hover:file:bg-slate-950 "
              />
              <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows={3}
                  className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a caption..."
                  required=""
                  defaultValue={""}
                />
                <InputBox
                  type="text"
                  placeholder="Location"
                  customClass="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-around p-6 w-full border-t border-solid border-blueGray-200 rounded-b">
              <Button
                type="button"
                name="Share"
                customClass="text-white w-1/2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                click={close}
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ModelBox;
