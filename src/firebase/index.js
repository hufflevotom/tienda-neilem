import { initializeApp, getApps, getApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const FireStoreApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAMi_P6_CVyB-PVeOR_HI3JlmneGalRLOM",
    authDomain: "bdreydereyes.firebaseapp.com",
    projectId: "bdreydereyes",
    storageBucket: "bdreydereyes.appspot.com",
    messagingSenderId: "490125519121",
    appId: "1:490125519121:web:3625a6a0353f28ebbd04b0",
    measurementId: "G-TY7NJRSTD2"
  };  
  let app;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  return getFirestore(app);
};

const FirestoreSave = async (collectionName, data) => {
  return await addDoc(collection(FireStoreApp(), collectionName), data);
};

export const FireStore = { save: FirestoreSave };
