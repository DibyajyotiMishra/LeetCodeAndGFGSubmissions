import React, { useRef } from "react";
import { connect } from "react-redux";
import { registerWithGoogle } from "../../../services/registerWithGoogle";
import { addAuthData } from "./redux/actions";
import { auth } from "../../../firebase";

const UserAuth = ({ addAuthData, nextStep, authData }) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userProfilePhoto, setUserProfilePhoto] = React.useState("");
  const [userWhatsAppNumber, setUserWhatsAppNumber] = React.useState("");

  const divRef = useRef(null);

  React.useEffect(() => {
    window.otpless = otplessUser => {
      const waNumber = otplessUser.waNumber;
      setUserWhatsAppNumber(waNumber);
    };
  }, []);

  React.useEffect(() => {
    if ((userEmail !== "" || userEmail !== null) && userWhatsAppNumber !== "") {
      addAuthData({ userEmail, userProfilePhoto, userWhatsAppNumber });
    }
  }, [userEmail, userWhatsAppNumber, userProfilePhoto, addAuthData]);

  React.useEffect(() => {
    if (authData !== null) {
      if (authData?.userEmail !== "" && authData?.userWhatsAppNumber !== "") {
        nextStep();
      }
    }
    // nextStep();
  }, [authData, nextStep]);

  const GoogleSignIn = () => {
    return (
      <button
        className='google-auth-button'
        onClick={async () => {
          await registerWithGoogle();

          setUserEmail(auth.currentUser.email);
          setUserProfilePhoto(auth.currentUser.photoURL);
        }}
        disabled={userEmail !== "" ? true : false}
      >
        <span className='fa fa-google fa-lg g-logo'></span> Continue with Google
      </button>
    );
  };
  return (
    <div className='parent-content'>
      <div className='userAuth-banner'>
        <h2>Proceed by authenticating your email and your mobile number.</h2>
        <p>
          This helps us to reduce spam entries and connect with each participant
          better.
        </p>
        <div className='auth-buttons'>
          <div ref={divRef} id='otpless'></div>
          <p className='helper-content'>And</p>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authData: state.eventLists?.authData,
});

const mapDispatchToProps = dispatch => ({
  addAuthData: authData => dispatch(addAuthData(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
