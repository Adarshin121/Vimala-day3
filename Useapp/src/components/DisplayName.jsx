import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DisplayName = () => {
    var[x,setX] = useState();
    const inpt = ()=>{
        setX("React")
    }
    const inpt2 = ()=>{
        setX("Angular")
    }
    const inpt3 = ()=>{
        setX("Next")
    }

    // use effect
    useEffect(()=>{
        inpt2()
    },[])
    
  return (
    <div>
<Typography variant='h3'>Welcome to {x} </Typography>
        <br /><br />
        <Button variant='contained' color='primary' onClick={inpt}>React</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button>&nbsp;
        <Button variant='contained' color='success' onClick={inpt3}>Next</Button>
    </div>
  )
}

export default DisplayName