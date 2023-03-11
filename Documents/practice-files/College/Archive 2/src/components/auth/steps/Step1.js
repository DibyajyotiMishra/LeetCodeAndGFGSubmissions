import React, { useState, useEffect } from "react";
// import TextField from '@mui/material';
import TextField from "@mui/material/TextField";
import { validatorSet1 } from "../validator";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerWithGoogle } from "../../../services/registerWithGoogle";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Step1 = ({ nextStep, handleChange, values }) => {
  const [name, setName] = useState(values.name);
  const [email, setEmail] = useState(values.email);

  const [phone, setPhone] = useState(values.phone);
  const [phoneWh, setPhoneWh] = useState(values.phoneWh);
  const [flags, setFlags] = useState({});

  // const [showPassword, setShow] = React.useState(false);
  // const [password, setPassword] = React.useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  

  useEffect(() => {
    // setPhoneWh(localStorage.getItem("waNumber"));
    if (user) {
      console.log(user.displayName);
      setName(user.displayName);
      setEmail(user.email);
      
    } else {
      console.log("no user");
    }
  })

  const continueSection = (e) => {
    e.preventDefault();
    var flag = validatorSet1({ name, email, phone, phoneWh });
    console.log(flag, Object.keys(flag).length);
    if (Object.keys(flag).length == 0) {
      handleChange({ name, email, phone, phoneWh });
      nextStep();
    }
    setFlags(flag);

  };

  

  return (
    <div className="bg-white my-5 w-[70%] mx-auto rounded-[20px] p-3 flex flex-col">
      <TextField
        label="Name"
        className="m-2"
        defaultValue={values.name || ""}
        value={
          user && name
        }
        InputProps = {
          {
            readOnly: user ? true : false
          }
        }
        onChange={(evt) => {
          var x = flags;
          delete x.name;
          setFlags(x);
          setName(evt.target.value);
        }}
        // error={flags?.name && true}
        helperText={flags?.name}
      />
      <TextField
        label="Email Address"
        value={
          user && email
        }
        InputProps = {
          {
            readOnly: user ? true : false
          }
        }
        defaultValue={values.email || ""}
        onChange={(evt) => {
          var x = flags;
          delete x.email;
          setFlags(x);
          setEmail(evt.target.value);
        }}
        className="m-2"
        error={flags?.email && true}
        helperText={flags?.email}
      />
      <p className="font-[14px] p-3 text-black">
          We'll never spam you and share your email 
          with anyone else.
      </p>

      <TextField
        placeholder="Phone number"
        label="Phone number"
        value={phone}
        defaultValue={values.phone || ""}
        onChange={(evt) => {
          var x = flags;
          delete x.phone;
          setFlags(x);
          setPhone(evt.target.value);
        }}
        className="m-2"
        error={flags?.phone && true}
        helperText={flags?.phone}
      />
      <TextField
        placeholder="Whatsapp number"
        label="Whatsapp number"
        value={
          phoneWh
        }
        className='m-2'
        defaultValue={values.phoneWh || ""}
        onChange={(evt) => {
          var x = flags;
          delete x.phoneWh;
          setFlags(x);
          setPhoneWh(evt.target.value);
        }}
      />
      {/* <FormControl variant="outlined" margin='normal' className='m-2'  helperText={flags?.password}> */}
      {/* <InputLabel htmlFor="outlined-adornment-password" error={flags?.password && true}>Password</InputLabel> */}
      {/* <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShow(!showPassword)}
                      onMouseDown={(evt)=> evt.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={flags?.password && true}
            
                helperText={flags?.password}
                onChange={(evt)=> {
                  var x = flags
              delete x.password
              setFlags(x)
                  setPassword(evt.target.value)}}

                label="Password"
              /> */}
      {/* <FormHelperText error={flags?.password && true}>{flags?.password}</FormHelperText> */}
      {/* </FormControl> */}
      <Button
        color="primary"
        variant="contained"
        onClick={(e) => continueSection(e)}
        className="w-[170px] mx-auto my-3"
      >
        Continue
      </Button>
    </div>
  );
};

export default Step1;
