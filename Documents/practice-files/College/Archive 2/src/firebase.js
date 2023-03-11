import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPu3Fr1Ed4u5ZtHjmIKbJIxOrTd0gBBaU",
  authDomain: "techfest-90fcb.firebaseapp.com",
  projectId: "techfest-90fcb",
  storageBucket: "techfest-90fcb.appspot.com",
  messagingSenderId: "1005972251908",
  appId: "1:1005972251908:web:12aa068dad8e78d82d9c51",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();
// const firestore = firebase.

export { db, auth, gProvider };
