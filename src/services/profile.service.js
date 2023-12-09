import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { auth, db } from "../firebase"

export const profile = async(userId) => {

const userDocRef = doc(collection(db, 'user'),userId);
        const userDocSnapshot = await getDoc(userDocRef);
return userDocSnapshot.data();
}
export const fetchUserPost = async () => {

    const userPostsQuery = query(collection(db, 'posts'), where('userId', '==', auth.currentUser.uid));
    const userPostsSnapshot = await getDocs(userPostsQuery);
    const postsData = userPostsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    return postsData

  }

  
