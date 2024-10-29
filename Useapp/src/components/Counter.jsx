import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount] = useState(0);
    const add = ()=>{
        console.log("add btn clicked");
        setCount(count+1)
    }
    const sub = ()=>{
        console.log("sub btn clicked");
        setCount(count-1)
    }

  return (
    <div>
        <Typography variant='h4'>Count:</Typography>
        <Button variant="contained" color="success" onClick={add}>+</Button>
        &nbsp; &nbsp;
        <Button variant="contained" color='error'onClick={sub}>-</Button>
        
    </div>
  )
}

export default Counter