import {collection, doc, updateDoc } from "firebase/firestore"
import { auth, db, storage } from "../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const updateUser = async (file,bio) => {
    const imageRef = ref(storage, `profile/${auth.currentUser.uid}${file.name}`);
      
    await uploadBytes(imageRef, file)
    const downloadURL = await getDownloadURL(imageRef);
    const usersCollection = collection(db, 'user');
    const userDoc = doc(usersCollection, auth.currentUser.uid);

    await updateDoc(userDoc, {
      profilePicture: downloadURL,
      bio: bio
    });

}