//import {   useNavigate } from 'react-router-dom';
import {useState,React} from "react";
import { TextField,Button,Box,Alert,FormControlLabel,Checkbox } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../Theme';
import { MuiTelInput } from 'mui-tel-input'

const Registration = () => {

    
    const [phone, setPhone] = useState('')
      
    const handleChange = (newPhone) => {
          setPhone(newPhone)
        } 

    //const navigate=useNavigate()
    const [alert,setAlert]=useState({
        status: false,
        msg: "",
        type: ""
    })
    const handleSubmit=(e)=> {
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const actualData={
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            phone: data.get('phone'),
            password: data.get('password'),
            password_confirm: data.get('password_confirm'),
            agree: data.get("agree")
        }
        if ( actualData.firstname && actualData.lastname  && actualData.email 
            && actualData.phone && actualData.password 
            && actualData.password_confirm && actualData.agree ){
            setAlert({
                status: true, 
                msg: "Success",
                type: "success"
            })            
             document.getElementById("registration-form").reset()
             


             
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
        <Box  onSubmit={handleSubmit} component='form' noValidate sx={{mt: 2 , mx: 5 }} id="registration-form">
        <TextField   autoComplete='off' margin="normal" required  id="firstname" name="firstname" label="Firstname"/>
        <TextField    sx={{mx: 5 }} autoComplete='off' margin="normal" required  id="lastname" name="lastname" label="Lastname"/>
        <TextField   autoComplete='off' margin="normal" fullWidth required  id="email" name="email" label="Email"/>
        <MuiTelInput fullWidth required label="Phone Number"  name="phone"  id="phone" value={phone} onChange={handleChange} />
        <TextField   autoComplete='off'margin="normal" type="password" required fullWidth id="password" name="password" label="Password"/>
        <TextField   autoComplete='off'margin="normal" type="password" required fullWidth id="password_confirm" name="password_confirm" label="Re-enter password"/>
        <FormControlLabel required id="agree" name="agree" control={<Checkbox />} label="I agree to terms and condition" />

        {alert.status ? <Alert  severity={alert.type}>{alert.msg}</Alert> : ""}
        <Box >
            <Button type="submit" variant="contained" color="primary"  sx={{mt: 2 ,color:"white" }} >Register</Button>
            

        </Box>
        
        </Box>
        </ThemeProvider >
    </>
  )
}

export default Registration;
