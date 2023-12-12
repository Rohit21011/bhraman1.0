import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const searchUser = async (searchTerm) => {
  if (!searchTerm) {
    // Return an empty array or handle as needed when the searchTerm is empty
    return [];
  }

  
  const usersCollection = collection(db, "user");
    const q = query(usersCollection, where("username", ">=", searchTerm));

    try {
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return results
    } catch (error) {
      console.error("Error searching users:", error);
      
    }
};
