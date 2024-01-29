import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../firebase"

export const tripPlan = async({startDate,endDate,location,description,from,contact}) => {
    const tripCollection = collection(db,"tripPlan")
    const tripDoc = doc(tripCollection,auth.currentUser.uid);
    await setDoc(tripDoc,{
       
        userName:auth.currentUser.displayName,
        location:location,
        startDate:startDate,
        endDate:endDate,
        from:from,
        contact:contact,
        description:description,
        members:[]
    })

}
export const findTravelPartner = async() => {
const TravelPartner = collection(db,"tripPlan")
const TravelPartnerDoc = await getDocs(TravelPartner)
const TravelPartnerData = TravelPartnerDoc.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return TravelPartnerData
}

export const joinTrip = async(userInfo,userId) => {
    const TravelPartner = collection(db,"tripPlan")
    const TravelPartnerDoc =  doc(TravelPartner,userId)
    await updateDoc(TravelPartnerDoc,{
        members:arrayUnion(userInfo)
    })
      
    }

export const myTripPlans = async() => {
    const userDocRef = doc(collection(db, 'tripPlan'),auth.currentUser.uid);
    const userDocSnapshot = await getDoc(userDocRef);
return userDocSnapshot.data();


}

// export const cancelTrip = async() => {
//     const userDocRef = doc(collection(db, 'tripPlan'),auth.currentUser.uid);
//     await userDocRef.delete();


// }
