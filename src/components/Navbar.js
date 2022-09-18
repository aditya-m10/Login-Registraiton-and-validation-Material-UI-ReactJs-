import React from 'react';
import { AppBar,Box,Toolbar,Typography,Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme"

const Navbar = () => {
  return (
    <>
    <ThemeProvider theme={theme}>

<Box sx={{flexGrow:1}}>
    <AppBar position='static' color="primary" >
        <Toolbar sx={{boxShadow: 3}}>
            <Typography variant='h5'sx={{color:"white",flexGrow:1,fontWeight: 'bold'}}  >
                AADINAATH<Typography variant='body1' > Sales</Typography>
            </Typography>
            
            <Button component={NavLink} to="/"  style={({isActive})=>{return {backgroundColor: isActive ? '#6fbf73' : ''}}} 
            sx={{color:"white", textTransform: 'none'}} end>Home</Button>
            <Button component={NavLink} to="/contact" style={({isActive})=>{return {backgroundColor: isActive ? '#6fbf73' : ''}}} 
            sx={{color:"white", textTransform: 'none'}}>Contact</Button>
            <Button component={NavLink} to="/reslogin" style={({isActive})=>{return {backgroundColor: isActive ? '#6fbf73' : ''}}} 
            sx={{color:"white", textTransform: 'none'}}>Login/Registration</Button>

        </Toolbar>
    </AppBar>
</Box>   
</ThemeProvider>

 </>
  )
}

export default Navbar;
