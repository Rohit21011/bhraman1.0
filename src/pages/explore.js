import { useEffect, useId, useState } from "react";
import InputBox from "../components/Input";
import { findTravelPartner, joinTri, joinTrip } from "../services/tripPlan.service";
import Button from "../components/Button";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Explore = () => {
  const [travelersList,setTravelersList] = useState();
  const [showTripModel,setShowTripModel] = useState(false)
  const [tripDetails,setTripdetails] = useState({
    userName:auth.currentUser.displayName
  })
 const [userId,setUserId] = useState(0)
  const tripStatus = useSelector((state)=>state.trip.isNewTripAdded)
  useEffect(()=>{
    const FetchTravelers = async() =>{
      const data = await findTravelPartner();
      setTravelersList(data)
    }
    FetchTravelers();
  },[tripStatus])
  const  joinTripPlan =async () => {
    await joinTrip(tripDetails,userId)
    toast.success("joined tripped!")
  }
 

  const handleTripDetails = (e) => {
    setTripdetails((prevUser)=>({
      ...prevUser,
      [e.target.name]:e.target.value
    }))
      }
 console.log(userId)
  return (
    <>
      <div className="sm:w-8/12 w-screen sm:mx-auto mb-8 ">
        {/* <div className="sm:w-full w-11/12  flex justify-around" >
           <div className="sm:w-7/12 w-full ml-8 lg:w-5/12">
           <InputBox type="search" lable="false" placeholder="find travel partner..."/>
           </div>
            
            
        
        </div> */}
      
        {/* posts */}

       
       <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                {travelersList?.map((item) => (
                  <>
                  {item.id !== auth.currentUser.uid &&
                  <div
                    key={item.id}
                    style={{minWidth:"fit-content"}}
                    className="flex items-center flex-col  bg-white p-4 rounded-lg shadow"
                  >
                    <div className="w-72">
                      <p className="font-semibold"><b>{item.userName}</b>&nbsp;&nbsp;<span>{item.location}</span></p>
                      <p className="font-semibold">{item.contact}</p>
                      <p className="font-semibold">{item.description}</p>
                    </div>
                  <div className=" mb-0 flex items-center"> 
                  <Button
                      type="button"
                      name="Join Trip"
                      click={()=>{
                        setShowTripModel(true);
                        setUserId(item.id)
                      }}
                      customClass="text-white ml-auto bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    />
                  </div>
                    
                
                  </div>
}
                  </>
                ))}
              </div>
            </div>
            {
        showTripModel &&  <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-80 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-bold">Join Trip</h3>
              <Button
                click={()=>setShowTripModel(false)}
                name="x"
                customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
              />
            </div>
            {/*body*/}
            <div className="relative pl-0 pr-0 pt-3 flex-auto">
             <div className="px-6">
             <InputBox type="text" name="location" onchange={handleTripDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={true} placeholder="current location"/> 
               
                <InputBox type="number" name="contact" onchange={handleTripDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="Contact no"/>
                <InputBox type="text" name="about"  onchange={handleTripDetails} customClass="peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" lable={false} placeholder="Tell me more about yourself!"/>

             </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-around p-3 w-full border-t border-solid border-blueGray-200 rounded-b">
              <Button
                type="button"
                name="Join Trip"
                customClass="text-white w-1/2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                click={joinTripPlan}
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
}

      </div>
    </>
  );
};
export default Explore;
