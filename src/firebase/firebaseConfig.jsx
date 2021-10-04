import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDGGAWrtG1mqhbxAHFBk_b3aUyF52DOZRU",
    authDomain: "chata-4699f.firebaseapp.com",
    projectId: "chata-4699f",
    storageBucket: "chata-4699f.appspot.com",
    messagingSenderId: "44012917616",
    appId: "1:44012917616:web:8a7faeaad7f776d5ecb5b5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth(app);


  export {auth ,db }