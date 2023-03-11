import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default async function getEventList() {
  let eventsList = [];
  const docRef = collection(db, "events-and-prices");
  const docSnap = await getDocs(docRef);
  docSnap.forEach(doc => {
    eventsList.push(doc.data());
  });
  return eventsList;
}
