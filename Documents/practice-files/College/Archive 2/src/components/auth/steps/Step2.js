import PropTypes from 'prop-types'
import React, { Component, useEffect, useState } from 'react'
import {Button,Slider} from '@mui/material';
import TextField from '@mui/material/TextField';
import { validatorSet2 } from '../validator';
import RadioGroup from '@mui/material/RadioGroup';

const Step2 = ({nextStep,prevStep,handleChange,values})=> {
  
    const [memberCount,setmemberCount] = useState(values.memberName?.length || 1)
    const [collegeName,setCollegeName] = useState(values.collegeName)
    const [teamName,setTeamName] = useState(values.teamName)
    const [teamLeader,setTeamLeader] = useState(values.teamLeader)
    const [flags,setFlags] = useState({})
    const [memberName,setMemberName] = useState(values.memberName || [""])
    const [eventType , setEventType] = useState('single');



    const cont = e => {
        e.preventDefault();
        var flg = validatorSet2({collegeName,teamName,teamLeader,memberName})
        console.log(flg)
        setFlags(flg)

        if (Object.keys(flg).length >0){
            
        }
        else{
            handleChange({collegeName,teamName,teamLeader,memberName})
            nextStep();
        }
        
        //
      };
    
      const back = e => {
        e.preventDefault();
        prevStep();
      };
    

      useEffect(()=>{console.log(memberName)},[memberName])


    return (
      <div className='bg-white my-5 w-[70%] text-black mx-auto rounded-[20px] p-3 flex flex-col'>
            <div>
                <p>
                    Enter the type of event you want to participate in
                </p>
            </div>
           <div className='m-2 flex flex-col'>
                <div className='p-2'>
                    <input type="checkbox" onChange={(e) => setEventType(e.target.value)} value="single" /> Single Event
                </div>
                <div className='p-2'>
                    <input type="checkbox" onChange={(e) => setEventType(e.target.value)} value="multiple" /> Multiple Event
                </div>
           </div>
           <TextField 
                placeholder='College Name'
                label='College Name'
                className='m-2'
                value={collegeName}
                onChange={(evt) => {
                    var x = flags
                    delete x.collegeName
                    setFlags(x)
                    setCollegeName(evt.target.value)}}
                error={flags?.collegeName && true}
                helperText={flags?.collegeName}
           />
           <TextField 
            placeholder="Team Name"
            label='Team Name'
            value={teamName}
            onChange={(evt) => {
            var x = flags
            delete x.teamName
            setFlags(x)
            setTeamName(evt.target.value)}}
            className='m-2'
            error={flags?.teamName && true}
            helperText={flags?.teamName}
        />
        <TextField 
            placeholder="Team Leader Name"
            label='Team Leader Name'
            value={teamLeader}
          onChange={(evt) => {
            var x = flags
            delete x.teamLeader
            setFlags(x)
            setTeamLeader(evt.target.value)}}
            className='m-2'
            error={flags?.teamLeader && true}
            helperText={flags?.teamLeader}
        />
           <div className='my-2'>Team Member Count</div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <Slider
                aria-label="Temperature"
                defaultValue={1}
                value={memberCount}
                onChange ={(e)=> {
                    var val = e.target.value
                    setmemberCount(val)
                    var z = val-memberName.length
                    console.log(val,-z,memberName.length)
                    if(z>0){
                        setMemberName([...memberName,...Array(val-memberName.length).fill("")])
                        //console.log(memberName)
                    }
                    else if (z<0){
                        var x = [...memberName]
                        x.splice(val,-z)
                        setMemberName(x)
                       // console.log(memberName)
                    }
                }}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
                className="w-4/5 ml-3"
                sx = {{width:"80%"}}
                />
            <div className='ml-3' style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
                <span>
                    1
                </span>
                <span>
                    2
                </span>
                <span>
                    3
                </span>
                <span>
                    4
                </span>
                <span>
                    5
                </span>
            </div>
            </div>
           {
            memberCount > 0 
            ? (
                <div className='flex flex-col'>
                    <h1 className='p-2 '>Team member Names</h1>
                    { Array.from({
                        length: memberCount},
                        (i,e) => 
                        <div>
                            <TextField 
                                className='m-2 w-full' 
                                placeholder='Name'
                                value={memberName[e] || ""}
                                onChange={(evt) => {
                                    var x = flags
                                    delete x.memberName
                                    setFlags(x)

                                    var z  = [...memberName]
                                    z[e] = evt.target.value
                                    setMemberName(z)}}
                                error={flags?.memberName?.i && flags?.memberName?.i.includes(e) ? true:false }
                                helperText={flags?.memberName?.i && flags?.memberName?.i.includes(e) ? flags.memberName.err:""}
                            />
                        </div>
                    )}
                </div>
            )
            : <h1 className='p-2'>0-team members selected</h1>
           }
            <div className='flex'>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={(e)=>back(e)}
                    className='w-[170px] mx-auto my-3'
                >Previous
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={(e)=>cont(e)}
                    className='w-[170px] mx-auto my-3'
                >Continue
                </Button>
            </div>
      </div>
    )
  
}

export default Step2