import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { gProvider, auth } from "../firebase";

export const registerWithGoogle = () => {
  return signInWithPopup(auth, gProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // console.log(user);
      return user;
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
