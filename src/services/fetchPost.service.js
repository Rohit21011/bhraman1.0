import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchPost =async () =>{
    
        const postsCollection = collection(db, 'posts');
        const snapshot = await getDocs(postsCollection);
       
        const postsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
         return postsData 


}