import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default async function getEventDetails(eventKey) {
  const docRef = doc(db, "events", eventKey);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return false;
  }
}
