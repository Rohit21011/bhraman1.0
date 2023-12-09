import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const fetchAllPost =async () =>{
    
        const postsCollection = collection(db, 'posts');
        const sortCollection = query(postsCollection, orderBy('timestamp', 'desc')); 
        const snapshot = await getDocs(sortCollection);
        const postsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
         return postsData
     
}

