import { query, where,collection,getDocs } from "firebase/firestore";
import { db } from "../firebase";




const getEvents = async (evtList) => {
    console.log(evtList);
    const evtRef = collection(db,'events')
    const q = query(evtRef, where("name", "in", evtList));
    const querySnapshot = await getDocs(q);
    var res = []
    querySnapshot.forEach((doc) => {res.push({id:doc.id, data:doc.data()})})
    console.log(res);
    return res

  }

export default getEvents