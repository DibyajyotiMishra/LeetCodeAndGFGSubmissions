import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { gProvider, auth } from "../firebase";

export const signout = ({ setUser }) => {
  const nav = signOut(auth)
    .then(() => {
      // Sign-out successful.
      setUser(null);
    })
    .catch((error) => {
      // An error happened.
    });
};
