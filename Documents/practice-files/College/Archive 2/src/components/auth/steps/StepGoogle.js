import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { registerWithGoogle } from "../../../services/registerWithGoogle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SignIn from "../signin";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../../firebase";

function StepGoogle({ nextStep, handleChange, values }) {

  const [waName, setWaName] = React.useState("");
  const [waNumber, setWaNumber] = React.useState("");

  useEffect(() => {
    window.otpless = otplessUser => {
      setWaName(otplessUser.waName);
      setWaNumber(otplessUser.waNumber);
    };
    onAuthStateChanged(auth, (user) => {
      if(user && waName && waNumber){
        nextStep();
      }
      else {
        console.log("no user");
      }
    });
  } , []);



  return (
    <div className="h-[80%] flex justify-center items-center">
      <div className="max-w-sm flex flex-col justify-center items-center p-2 mx-auto bg-white text-black rounded overflow-hidden shadow-lg">
        <h2 className="py-3 text-center font-bold text-[18px]">Proceed by authenticating your email and your mobile number.</h2>
        <p className="px-3 text-center text-[14px]">
          This helps us to reduce spam entries and connect with each participant
          better.
        </p>
        <div className="px-6 py-4">
          <GoogleButton
            style={{ width: "300px", borderRadius: "6px", fontSize: "19px" }}
            onClick={() => {
              registerWithGoogle();
            }}
          />
          <p className="text-center p-3">And</p>
          <div id="otpless">

          </div>

          {/* <h1 className="text-black text-center text-[24px] font-bold mt-4">
            OR
          </h1>
          <div className="mt-4">
            <SignIn />
          </div> */}
          <button onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepGoogle;