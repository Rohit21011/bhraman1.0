import { collection, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase";

// export const addComment = async (postId,comment) => {
//   try {
//     const postsCollection = collection(db, 'posts');
//     const postDocRef = doc(postsCollection, postId);  // Use doc to get a reference to the specific document
//     const postDoc = await getDoc(postDocRef);
// console.log(comment)
//     if (postDoc.exists()) {
      
//         // User already liked the post, remove the like
//         await updateDoc(postDocRef, {
//           comments: arrayUnion(comment)
//         });
        
//     }
// }
//       // Successfully updated likes
    
//    catch (err) {
//     console.error('Error cooment:', err);
//   }

//   return false; // Error updating likes
// };

export const addComment = async (postId, Comment) => {
    console.log(auth.currentUser)
    try {
      // Ensure that Comment is defined and not empty
      if (Comment && Comment.trim() !== '') {
        const postsCollection = collection(db, 'posts');
        const postDocRef = doc(postsCollection, postId);
        await updateDoc(postDocRef, {
          comments: arrayUnion({ userId: auth.currentUser.displayName, comment: Comment })
        });
        console.log('Comment added successfully');
      } else {
        console.error('Comment is empty or undefined');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  export const getAllComments = async (postId) => {
    try {
      const postsCollection = collection(db, 'posts');
      const postDocRef = doc(postsCollection, postId); 
      const postDoc = await getDoc(postDocRef)
  
    return postDoc.data().comments
          
  }
        
      
     catch (err) {
      console.error('Error cooment:', err);
    }
  
    return false; 
  };