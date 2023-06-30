import { initializeApp, getApps, getApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const FireStoreApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAz_byMEyiagQ3bcxKFtvABsdv1IqY5XH0",
    authDomain: "tiendaneilem.firebaseapp.com",
    projectId: "tiendaneilem",
    storageBucket: "tiendaneilem.appspot.com",
    messagingSenderId: "151754059097",
    appId: "1:151754059097:web:82f259aac2fa88fcde3048",
    measurementId: "G-6NQF3319EM",
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
