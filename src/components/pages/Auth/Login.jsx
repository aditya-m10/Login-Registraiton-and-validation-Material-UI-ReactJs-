import {  NavLink, useNavigate } from 'react-router-dom';
import {useState} from "react";
import { TextField,Button,Box,Alert } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';

const Login=()=>{
    const navigate=useNavigate()
    const [alert,setAlert]=useState({
        status: false,
        msg: "",
        type: ""
    })
    const handleSubmit=(e)=> {
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const actualData={
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password){
            setAlert({
                status: true, 
                msg: "Success",
                type: "success"
            })            
             document.getElementById("login-form").reset()
             setTimeout(() => {
                navigate("/dashboard")
             }, 1000);
        } else {
        setAlert({
            status: true, 
            msg: "All Fields are Required",
            type: "error"
        })        }       
    }
    return (
        <>
        <ThemeProvider theme={theme}>
        <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt: 2 , mx: 5 }} id="login-form">
        <TextField   autoComplete='off' margin="normal" required fullWidth id="email" name="email" label="Email"/>
        <TextField   autoComplete='off'margin="normal" type="password" required fullWidth id="password" name="password" label="Password"/>
        {alert.status ? <Alert  severity={alert.type}>{alert.msg}</Alert> : ""}
        <Box >
            <Button type="submit" variant="contained" color="primary"  sx={{mt: 2 ,color: "white" }} >Login</Button>
            <Box  sx={{mt: 2}}><NavLink to="/reset">Forget password?</NavLink></Box>
            

        </Box>
        
        </Box>
        </ThemeProvider >

        </>
    )
}

export default Login;