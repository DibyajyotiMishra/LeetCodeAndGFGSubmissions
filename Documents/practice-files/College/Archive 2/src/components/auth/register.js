import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, IconButton } from '@mui/material';
import './design.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { validatorSet1 } from './validator';
import { db } from '../../firebase';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import Multiselect from 'multiselect-react-dropdown';
import { Add, RemoveCircleOutline } from '@mui/icons-material';

export default function TextFieldSizes() {
  const [events, setEvents] = React.useState('');
  const handleChange = (event) => {
    var x = flags
            delete x.events
            setFlags(x)
    setEvents(event.target.value);
  };
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [city, setCity] = React.useState("")
  const [collegeName, setCollegeName] = React.useState("")
  const [name, setName] = React.useState("")
  const [gender, setGender] = React.useState('');
  const [selectedOptions , setSelections] = React.useState('');
  const [totalFee , setTotalFee] = React.useState(0);
  const [inputList, setInputList] = React.useState([{ name:'' }]);


  const handleChanges = (gen) => {
    var x = flags
            delete x.gender
            setFlags(x)
    setGender(gen.target.value);
  };
  const [flags,setFlags] = React.useState({})

  const eventLists = [
    {value: 'Strigrays League - Gaming Jam' , regFee : 200},
    {value : 'Battle Of The Ice - Gaming Tournment' , regFee : 200},
    {value : 'Zh3r0-Capture the Flag' , regFee : 150},
    {value : 'Code Wars - Coding Tournment' , regFee : 250},
    {value : 'Platonic' , regFee : 180},
    {value : 'Bidders Coding Camp' , regFee : 220},
    {value : 'BotBattleBash B3' ,regFee : 130},
    {value : 'ML-XLR8' , regFee : 100},
    {value : 'AI Escape Room' , regFee : 160},
    {value :'Colay' , regFee : 180},
    {value : 'Dare to be Different (Ideathon)' , regFee : 280},
    {value : 'Forensics Investigation Challenges' , regFee : 220},
    
  ];



  const ClearForms = () => {
    setEmail("")
    setPhone("")
    setGender('')
    setName("")
    setCity("")
    setEvents('')
    setCollegeName("")
    setFlags({})
    setSelections('')
    setTotalFee(0)
  }

  const submit = async () => {
     await setDoc(doc(db,"userinfo",email),{
      email,name,gender,phone,city,collegeName,totalFee ,
      events: arrayUnion(selectedOptions)
     },
     { merge: true }
     )
     console.log("submit")
     ClearForms()
  }

  const register = (evt,params) => {
    var value = validatorSet1(params)
    evt.preventDefault();
    console.log(Object.keys(value))
    if (Object.keys(value).length == 0){
      console.log("ok")
      submit()
      
    }
    else{
      
      console.log(value)
      setFlags(value)
    }
  }

  const handleOnchangeService = (val) => {
    var array = [];
    for (let i = 0; i < val.length; i++) {
      array = array.concat(val[i].regFee);

    }
    setSelections(array);
    var sum = array.reduce(function (x, y) {
      return x + y;
    }, 0);
    setTotalFee(sum);
  };

  const handleRemoveService = (val) => {
    var array = [...selectedOptions]; // make a separate copy of the array
    var removearray = [];
    for (let i = 0; i < val.length; i++) {
      removearray = removearray.concat(val[i].regFee);
    }
    var removeddata = array.filter((service) => !removearray.includes(service));
    delete removearray[removeddata];
    setSelections(removeddata);
    var sum = removearray.reduce(function (x, y) {
      return x + y;
    }, 0);
    setTotalFee(sum);
  };


  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name : ''}]);
  };

  React.useEffect(() => {},[flags])


  return (
    <div className='forms h-screen'>
    <div className='cardRegister'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
      }}
      
     
    >
      <div>
        {/* <TextField
          label="Name"
          id="outlined-size-small"
        //   defaultValue="Name"
          size="small"
          value={name}
          onChange={(evt) => {
            var x = flags
            delete x.name
            setFlags(x)
            setName(evt.target.value)
          }}
        /> */}

            {
              inputList.map((x, i) => {
                <div className='flex'>
                  <TextField 
                  label="Name" 
                  id="outlined-size-small" 
                  size="small" 
                  value={x.name} 
                  onChange = {e => handleInputChange(e, i)}

                  // onChange={evt => {
                  //   var x = flags
                  //   delete x.name
                  //   setFlags(x)
                  //   setName(evt.target.value)
                  // }} 
                  />
                  <div>
                    {inputList.length !== 1 && 
                      <IconButton className='' color='error' onClick={() => handleRemoveClick(i)}>
                          <RemoveCircleOutline />
                      </IconButton>
                    }
                    {
                      inputList.length - 1 === i && 
                      <IconButton color='success' onClick={handleAddClick}>
                          <Add />
                      </IconButton>
                    }
                  </div>
                </div>

                
              })
            }
          

        {flags?.name && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.name}</Box></div>}
        <TextField
          label="Email"
          id="outlined-size-small"
        //   defaultValue="email"
          size="small"
          value={email}
          onChange={(evt) => {
            var x = flags
            delete x.email
            setFlags(x)
            setEmail(evt.target.value)}}
        />

        

        
        {flags?.email && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.email}</Box></div>}
      </div>
      <div>
      <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
      <h2 className='py-4'>Total Amount to be paid: {totalFee}</h2>

      {/* <InputLabel id="demo-select-small">Events</InputLabel> */}
      {/* <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={events}
        label="Events"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Strigrays League - Gaming Jam"}>Strigrays League - Gaming Jam</MenuItem>
        <MenuItem value={"Battle Of The Ice - Gaming Tournment"}>Battle Of The Ice - Gaming Tournment</MenuItem>
        <MenuItem value={"Zh3r0-Capture the Flag"}>Zh3r0-Capture the Flag</MenuItem>
        <MenuItem value={"Platonic"}>Platonic</MenuItem>
        <MenuItem value={"Bidders Coding Camp"}>Bidders Coding Camp</MenuItem>
        <MenuItem value={"BotBattleBash B3"}>BotBattleBash B3</MenuItem>
        <MenuItem value={"ML-XLR8"}>ML-XLR8</MenuItem>
        <MenuItem value={"AI Escape Room"}>AI Escape Room</MenuItem>
        <MenuItem value={"Colay"}>Colay</MenuItem>
        <MenuItem value={"Dare To be Different (Ideathon)"}>Dare To be Different (Ideathon)</MenuItem>
        <MenuItem value={"Forensics Investigation Challenges"}>Forensics Investigation Challenges</MenuItem>
        <MenuItem value={"120"}>Forensics Investigation Challenges</MenuItem>
      </Select> */}
      <Multiselect 
          options={eventLists}
          displayValue="value"
          selectionLimit={eventLists.length}
          name="eventListsSelection"
          showArrow={true}
          placeholder="Select Events"
          required
          onSelect={handleOnchangeService}
          onRemove={handleRemoveService}
      />
    </FormControl>
    {flags?.events && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.events}</Box></div>}
      </div>
            <div>
      <TextField
          label="Phone Number"
          id="outlined-size-small"
          size="small"
          value={phone}
          onChange={(evt) => {
            var x = flags
            delete x.phone
            setFlags(x)
            setPhone(evt.target.value)}}
        />
        {flags?.phone && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.phone}</Box></div>}
        <TextField
        label="College Name"
        id="outlined-size-small"
        size="small"
        value={collegeName}
          onChange={(evt) => {
            var x = flags
            delete x.collegeName
            setFlags(x)
            setCollegeName(evt.target.value)}}
      />
      {flags?.collegeName && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.collegeName}</Box></div>}
      </div>
      <div>
      <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          value={city}
          onChange={(evt) => {
            var x = flags
            delete x.city
            setFlags(x)
            setCity(evt.target.value)}}
        /> 
        {flags?.city && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.city}</Box></div>}
        <FormControl sx={{ m: 2, minWidth:150 }} size="small">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={gender}
        label="Gender"
        onChange={handleChanges}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
      </Select>
    </FormControl>
    {flags?.gender && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.gender}</Box></div>}
      </div>
      <div className='flex flex-col items-center justify-center'>
      {/* <button className="border-2 border-[#ff00b3] text-black transition  duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]"> */}
      <button onClick={(evt) => register(evt,{email,phone,events,gender,name,collegeName,city})} className="border-2 border-[#ff00b3] text-black transition  duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
          </button>

      </div>
           
    </Box>
      </div>
    </div>
  );
}