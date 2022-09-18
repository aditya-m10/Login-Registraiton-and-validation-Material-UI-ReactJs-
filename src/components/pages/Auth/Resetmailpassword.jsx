import {useState} from "react";
import {   useNavigate } from 'react-router-dom';
import { Grid,TextField,Button,Box,Alert } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';

const Resetmailpassword=()=>{
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
            phone: data.get('phone'),
        }
        if (actualData.email && actualData.phone){
            setAlert({
                status: true, 
                msg: "Reset mail sent.Check Your Email !!!",
                type: "success"
            })            
             document.getElementById("reset-form").reset()
             setTimeout(() => {
                navigate("/reslogin")
             }, 3000);
        } else {
        setAlert({
            status: true, 
            msg: "Invalid Credentials ",
            type: "error"
        })        }       
    }
    return (
        <>
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
        <Box  onSubmit={handleSubmit} component='form' noValidate sx={{mt: 2 , mx: 5 }} id="reset-form">
        <TextField   autoComplete='off' margin="normal" fullWidth required  id="email" name="email" label="Email"/>
        <TextField   autoComplete='off'margin="normal" fullWidth type="number" required  id="phone" name="phone" label="phone"/>
        {alert.status ? <Alert  severity={alert.type}>{alert.msg}</Alert> : ""}
        <Box >
            <Button type="submit" variant="contained" color="primary"  sx={{mt: 2,color:"white"  }} >Send</Button>
            

        </Box>
        
        </Box>
        </Grid>
        </ThemeProvider >

        </>
    )
}

export default Resetmailpassword;