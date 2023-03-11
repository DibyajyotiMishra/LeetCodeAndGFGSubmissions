import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { addPersonalInfo } from "./redux/actions";

const PersonalInfo = ({
  addPersonalInfo,
  authData,
  nextStep,
  personalInfo,
}) => {
  const [fullName, setFullName] = React.useState("");
  const [universityName, setUniversityName] = React.useState("");

  const onChange = event => {
    const { name, value } = event.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "universityName") {
      setUniversityName(value);
    }
  };

  useEffect(() => {
    if (fullName !== "" && universityName !== "")
      addPersonalInfo({ fullName, universityName });
  }, [addPersonalInfo, fullName, universityName]);

  const goNext = () => {
    if (fullName !== "" && universityName !== "") {
      nextStep();
    }
  };

  return (
    <div className='parent-content'>
      <div className='personalInfo-banner'>
        <h2>Please help us with some of your Personal Details</h2>
        <form>
          <div className='mb-1'>
            <label for='fullNameInput' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='fullNameInput'
              name='fullName'
              onChange={onChange}
              value={fullName}
            />
          </div>
          <div className='mb-1'>
            <label for='emailInput' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='emailInput'
              disabled
              aria-describedby='emailInfo'
              value={authData.userEmail}
            />
            <div id='emailInfo' className='form-text'>
              We'll never spam you and share your email with anyone else.
            </div>
          </div>
          <div className='mb-1'>
            <label for='phoneNumberInput' className='form-label'>
              WhatsApp Number
            </label>
            <input
              type='tel'
              className='form-control'
              id='phoneNumberInput'
              pattern='[0-9]{3} [0-9]{3} [0-9]{4}'
              maxlength='10'
              disabled
              value={authData.userWhatsAppNumber}
            />
          </div>
          <div className='mb-1'>
            <label for='collegeInput' className='form-label'>
              College/University Name
            </label>
            <input
              type='text'
              className='form-control'
              id='collegeInput'
              name='universityName'
              onChange={onChange}
              value={universityName}
            />
          </div>
        </form>
        <div className='buttons mt-4'>
          <button
            onClick={goNext}
            className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]'
          >
            Go Next
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authData: state.eventLists.authData,
  personalInfo: state.eventLists.personalInfo,
});

const mapDispatchToProps = dispatch => ({
  addPersonalInfo: personalInfo => dispatch(addPersonalInfo(personalInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
