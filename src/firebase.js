// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAZgGcJqrXjw9r_vtZmmD5NHEXUHFV1-s",
  authDomain: "bhraman-1e91d.firebaseapp.com",
  projectId: "bhraman-1e91d",
  storageBucket: "bhraman-1e91d.appspot.com",
  messagingSenderId: "72751536168",
  appId: "1:72751536168:web:80057ad5c918ec156abd1d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export default app;
