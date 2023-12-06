

import { getDownloadURL, getStorage,ref,uploadBytes } from "firebase/storage";
import { auth, db } from "../firebase";
import { Firestore, addDoc, collection } from "firebase/firestore";

const storage = getStorage();


export const addPost = async (file,location,caption) => {
    const fileExtension = file?.type.split('/').pop();
    try{
        
        const uid = auth.currentUser.uid
        const imageRef = ref(storage, `post/${uid}.${fileExtension}`);
      
        await uploadBytes(imageRef, file)
        const downloadURL = await getDownloadURL(imageRef);
        const postDocRef = await addDoc(collection(db, 'posts'), {
            userId: uid, 
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