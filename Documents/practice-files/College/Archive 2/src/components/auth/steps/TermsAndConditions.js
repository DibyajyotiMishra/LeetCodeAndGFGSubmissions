import React, { useState, useEffect } from "react";
// import TextField from '@mui/material';
import TextField from "@mui/material/TextField";
import { validatorSet1 } from "../validator";
import { getAuth } from "firebase/auth";

const TermsAndConditions = ({ nextStep, handleChange, values }) => {
  const [name, setName] = useState(values.name);
  const [email, setEmail] = useState(values.email);

  const [phone, setPhone] = useState(values.phone);
  const [phoneWh, setPhoneWh] = useState(values.phoneWh);
  const [flags, setFlags] = useState({});

  const [showPassword, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    console.log(user.displayName);
  } else {
    console.log("no user");
  }

  const continueSection = (e) => {
    e.preventDefault();
    var flag = validatorSet1({ name, email, phone, phoneWh, password });
    console.log(flag, Object.keys(flag).length);
    if (Object.keys(flag).length == 0) {
      handleChange({ name, email, phone, phoneWh, password });
      nextStep();
    }
    setFlags(flag);
  };

  useEffect(() => {
    console.log(values);
  }, []);

  return (
    <div className="bg-white my-5 w-[70%] mx-auto rounded-[20px] p-3 flex flex-col">
        
    </div>
  );
};

export default TermsAndConditions;
