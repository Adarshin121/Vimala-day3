import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
      
      var[name,setname]=useState("Adarshin")
      var[val,setval]=useState()


      const handleInput =(e)=>{
        console.log(e.target.value)
        setname(e.target.value)

      }
      const Submit =()=>{
        setval(name)
      }
  return (
    <div>
        <Typography variant='h6'>
            welcome {val}
        </Typography>
        <TextField variant='outlined'onChange={handleInput} label='enter name'/>
        <Button onClick={Submit}>submit</Button>
    </div>
  )
}

export default StateBasics