

import { getDownloadURL, getStorage,ref,uploadBytes } from "firebase/storage";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const storage = getStorage();


export const addPost = async (file,location,caption) => {

    try{
        
        
        const imageRef = ref(storage, `post/${auth.currentUser.uid}${file.name}`);
      
        await uploadBytes(imageRef, file)
        const downloadURL = await getDownloadURL(imageRef);
        const postDocRef = await addDoc(collection(db, 'posts'), {
            userId: auth.currentUser.uid, 
            userName:auth.currentUser.displayName,
            timestamp:serverTimestamp(),
            caption,
            location,
            downloadURL,
            likes:[],
            comments:[]
          });
          console.log(postDocRef)
}
    catch(error){
console.log(error)
    }
}