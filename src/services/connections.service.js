import { arrayRemove, arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const connections = async(followedUserId) => {
    const userCollection = collection(db, 'user');
  const currentUserDoc = doc(userCollection, auth.currentUser.uid);
  const followedUserDoc = doc(userCollection, followedUserId);
  try {
    const currentUserSnapshot = await getDoc(currentUserDoc);
  
    if (currentUserSnapshot.exists()) {
      const isFollowing = currentUserSnapshot.data()?.following?.includes(followedUserId);
      console.log(isFollowing);
  
      if (isFollowing) {
        return true;
      }
    } else {
      console.error('Current user document does not exist');
    }
  } catch (error) {
    console.error('Error fetching current user data:', error);
  }
  // Update the current user's following list
  await updateDoc(currentUserDoc, {
    following: arrayUnion(followedUserId),
  });

  // Update the followed user's followers list
  await updateDoc(followedUserDoc, {
    followers: arrayUnion(auth.currentUser.uid),
  });
return false
}

export const getFollowingList  = async () => {
    const currentUserDoc = doc(collection(db, 'user'), auth.currentUser.uid);
      const currentUserData = (await getDoc(currentUserDoc)).data();

      // Array to store promises of fetching user documents
      const userDocPromises = currentUserData.following.map((userId) =>
        getDoc(doc(collection(db, 'user'), userId))
      );

      // Wait for all promises to resolve
      const userDocs = await Promise.all(userDocPromises);
      const followingUserData = userDocs.map((userDoc) => userDoc.data());
      return followingUserData
}
export const getFollowersList  = async () => {
    const currentUserDoc = doc(collection(db, 'user'), auth.currentUser.uid);
      const currentUserData = (await getDoc(currentUserDoc)).data();

      // Array to store promises of fetching user documents
      const userDocPromises = currentUserData.followers.map((userId) =>
        getDoc(doc(collection(db, 'user'), userId))
      );

      // Wait for all promises to resolve
      const userDocs = await Promise.all(userDocPromises);
      const followersUserData = userDocs.map((userDoc) => userDoc.data());
      return followersUserData
}


export const removeFollower = async (followedUserId) => {
    const userCollection = collection(db, 'user');
    const currentUserDoc = doc(userCollection, auth.currentUser.uid);
    const followedUserDoc = doc(userCollection, followedUserId);
  
    try {
      // Update the current user's following list
      await updateDoc(currentUserDoc, {
        followers: arrayRemove(followedUserId),
      });
  
      // Update the followed user's followers list
      await updateDoc(followedUserDoc, {
        following: arrayRemove(auth.currentUser.uid),
      });
  
      console.log('Follower removed successfully.');
    } catch (error) {
      console.error('Error removing follower:', error);
    }
  };

export const removeFollowing= async(followedUserId) => {
    const userCollection = collection(db, 'user');
  const currentUserDoc = doc(userCollection, auth.currentUser.uid);
  const followedUserDoc = doc(userCollection, followedUserId);

  try {
    // Update the current user's following list
    await updateDoc(currentUserDoc, {
      following: arrayRemove(followedUserId),
    });

    // Update the followed user's followers list
    await updateDoc(followedUserDoc, {
      followers: arrayRemove(auth.currentUser.uid),
    });

    console.log('Follower removed successfully.');
  } catch (error) {
    console.error('Error removing follower:', error);
  }

}

