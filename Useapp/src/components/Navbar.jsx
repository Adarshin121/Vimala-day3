import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h6'>my-app3</Typography>
                &nbsp; 
                <Link to='/s'>
                <Button variant='contained'>State</Button>
                </Link>

                &nbsp; 
                <Link to='/c'>
                <Button variant='contained'>counter</Button>
                </Link>

                &nbsp; 
                <Link to='/n'>
                <Button variant='contained'>name</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />

    </div>
  )
}

export default Navbar