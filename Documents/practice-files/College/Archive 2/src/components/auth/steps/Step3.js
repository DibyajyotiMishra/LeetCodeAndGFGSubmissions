import React, { Component,useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Button,TextField } from '@mui/material';
import { validatorSet3 } from '../validator';


const Step3 = ({nextStep,prevStep,handleChanges}) => {

    const [selectedOptions,setSelection] = useState("")
    const [totalFee,setFee] = useState(0)
    const [txnId,setId] = useState("")
    const [disabled,setDisabled] = useState(false)
    const [flags,setFlags] = useState({})

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
      
    ]

     const cont = e => {
        e.preventDefault();
        handleChanges({selectedOptions,totalFee,txnId})
        nextStep();
      };
    
     const back = e => {
        e.preventDefault();
        prevStep();
      };

     const handleOnchangeService = (val) => {
        var array = [];
        for (let i = 0; i < val.length; i++) {
          array = array.concat(val[i].regFee);
    
        }
        setSelection(array);
        var sum = array.reduce(function (x, y) {
          return x + y;
        }, 0);
        setFee(sum);
        console.log(sum);
      };
    
     const handleRemoveService = (val) => {
        var array = [...selectedOptions]; // make a separate copy of the array
        var removearray = [];
        for (let i = 0; i < val.length; i++) {
          removearray = removearray.concat(val[i].regFee);
        }
        var removeddata = array.filter((service) => !removearray.includes(service));
        delete removearray[removeddata];
        setSelection(removearray);
        console.log(removearray);
        var sum = removearray.reduce(function (x, y) {
          return x + y;
        }, 0);
        setFee(sum);
      };
    
    return (
      <div className='flex flex-col my-5 w-[70%] mx-auto bg-white p-3'>
        <Multiselect 
            options={eventLists}
            displayValue="value"
            selectionLimit={eventLists.length}
            name="eventListsSelection"
            showArrow={true}
            placeholder="Select Events"
            required
            onSelect={(e)=>{
              var x = {...flags}
              delete x.events
              setFlags(x)
              handleOnchangeService(e)}}
            onRemove={(e)=>handleRemoveService(e)}
            disable={disabled}
            
        />
        {flags.events && <p className='mx-5 text-xs text-rose-700'>invalid events * </p>}
        
      <h2 className='py-4'>Total Amount to be paid: {totalFee}</h2> 
      <Button 
            color="primary"
            variant="contained"
            onClick={(e)=>{
              var flags = validatorSet3({selectedOptions})
              if (flags.events){
                setFlags(flags)
              }
              else{
                setDisabled(false)
              }
              

            }}
            className='w-[170px] mx-auto my-3'         
        >{disabled?"Edit choices":"Make Payment"}</Button>
        {disabled &&
      <TextField 
                                className='m-2 w-full' 
                                placeholder='Transaction Id'
                                value={txnId}
                                onChange={(evt) => {
                                    var x = {...flags}
                                    delete x.txn
                                    setFlags(x)
                                    setId(evt.target.value)}}
                                error={flags.txn && true}
                                helperText={flags.txn && flags.txn}
                            />}
      <div className='flex'>
        <Button
            color="primary"
            variant="contained"
            onClick={(e)=>back(e)}
            disabled={disabled}
            className='w-[170px] mx-auto my-3'        
        >Previous</Button>
        <Button 
            color="primary"
            variant="contained"
            onClick={(e)=>{
              if(txnId.trim()=="") {
                setFlags({txn:"empty Transaction Id"})
              }
              else{
                cont(e)
              }
              }}
            disabled={!disabled}
            className='w-[170px] mx-auto my-3'         
        >Done</Button>
      </div>
      </div>
    )
}
export default Step3