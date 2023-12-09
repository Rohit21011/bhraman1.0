import { collection,  getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const search = async(searchTerm) => {
    if (!searchTerm) {
        // Return an empty array or handle as needed when the searchTerm is empty
        return [];
      }
    const usersCollection = collection(db, 'user');
    
  const q = query(usersCollection, where('username', '>=', searchTerm), where('username', '<=', searchTerm + '\uf8ff'));

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return users;
  } else {
    return 0;
  }
  };

