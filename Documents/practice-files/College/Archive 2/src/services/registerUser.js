import { db } from "../firebase.js";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";

export default async function registerUser(registrationDetails) {
  console.log(registrationDetails);
  const docRef = doc(db, "registrations", registrationDetails.email);
  const res = await setDoc(docRef, registrationDetails);
  console.log(res);
  console.log("done");
}

export async function getUserDetails(email) {
  const docRef = doc(db, "userinfo", email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
