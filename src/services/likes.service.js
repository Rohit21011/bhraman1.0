import { collection, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase";

export const likes = async (postId, followedUserId) => {
  try {
    const postsCollection = collection(db, 'posts');
    const postDocRef = doc(postsCollection, postId);  // Use doc to get a reference to the specific document
    const postDoc = await getDoc(postDocRef);

    if (postDoc.exists()) {
      const likes = postDoc.data().likes || [];

      if (likes.includes(auth.currentUser.uid)) {
        // User already liked the post, remove the like
        await updateDoc(postDocRef, {
          likes: arrayRemove(auth.currentUser.uid)
        });
        return {
            getLikeStatus:false,
            getLikesCount:likes.length-1
        }
      } else {
        // User hasn't liked the post, add the like
        await updateDoc(postDocRef, {
          likes: arrayUnion(auth.currentUser.uid)
        });
        return {
            getLikeStatus:true,
            getLikesCount:likes.length+1

        }
            
      }

      // Successfully updated likes
    } else {
      console.log('Post document not found');
    }
  } catch (err) {
    console.error('Error updating likes:', err);
  }

  return false; // Error updating likes
};
