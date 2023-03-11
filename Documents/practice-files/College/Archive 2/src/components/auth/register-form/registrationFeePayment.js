import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { registerUserStart } from "./redux/actions";
import "./styles.css";

const RegistrationFeePayment = ({
  authData,
  registerUser,
  individualEvents,
  teamEvents,
  personalInfo,
}) => {
  const [transactionID, setTransactionID] = useState("");
  // const [paymentProof, setPaymentProof] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    window.open("https://google.com", "_blank");
  };

  const handleRegistration = () => {
    const userData = {
      fullName: personalInfo.fullName,
      email: authData.userEmail,
      whatsappNumber: authData.userWhatsAppNumber,
      universityName: personalInfo.universityName,
      individualEvents,
      teamEvents,
      transactionID,
    };

    registerUser(userData);
    return navigate("/");
  };

  const individualEventsTotalFees = individualEvents?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.eventFee,
    0
  );

  const teamEventsTotalFees = teamEvents?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.eventFee,
    0
  );

  const totalFees = individualEventsTotalFees + teamEventsTotalFees;

  console.log(totalFees);

  return (
    <div className='parent-content'>
      <div className='registrationFees-banner'>
        <h2 className='mb-5'>
          Continue by paying the registration fees: Rs. {totalFees}
        </h2>
        <button className='paymentButton mt-5 mb-5' onClick={handleClick}>
          Go to Payment Portal
        </button>
        <div class='mt-5 mb-3'>
          <label for='transactionIdField' className='form-label'>
            Transaction Id
          </label>
          <input
            type='text'
            class='form-control'
            id='transactionIdField'
            value={transactionID}
            onChange={e => setTransactionID(e.target.value)}
          />
        </div>

        <div className='mb-3 mt-2'>
          <button className='registerButton' onClick={handleRegistration}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authData: state.eventLists.authData,
  personalInfo: state.eventLists.personalInfo,
  individualEvents: state.eventLists.individualEvents,
  teamEvents: state.eventLists.teamEvents,
});

const mapDispatchToProps = dispatch => ({
  registerUser: registrationDetails =>
    dispatch(registerUserStart(registrationDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationFeePayment);
