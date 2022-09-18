import  Login  from './Login';
import { Grid,Card,Box, Tabs, Tab } from '@mui/material';
import  { useState } from 'react';
import login from "./images/login.png"
import Registration from './Registration';
import theme from '../../Theme';
import { ThemeProvider } from '@mui/material/styles';



const TabPanel=(props)=>{
    const {children, value, index}=props;
    return(
        <div role="tabpanel" hidden={value!==index}>
        {
            value === index && (
                <Box>{children}</Box>
            )
        }
        </div>
    )
}
function ResLogin() {
    const [value,setValue]=useState(0);
    const handleChange =(event,newValue)=>{
        setValue(newValue);
    }
  return (
    <>
    <ThemeProvider theme={theme}>

    <Grid container sx={{height: '90vh'}}>
        <Grid item lg={7} sm={5} 
        sx={{backgroundImage: `url(${login})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: {xs: 'none',sm: 'block'}
        }}>

        </Grid>
        <Grid item lg={5} sm={7}>
            <Card sx={{height: '100%' ,width: '100%'}}>
            <Box>

                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs   onChange={handleChange} value={value} textColor='primary' indicatorColor='primary'>
                        <Tab label='Login' sx={{textTransform: 'none',fontWeight: 'bold',color: "black"}}></Tab>
                        <Tab label='Registration' sx={{textTransform: 'none',fontWeight: 'bold',color: "black"}} ></Tab>

                    </Tabs>
                </Box>
                <TabPanel value={value}  index={0}><Login /></TabPanel>
                <TabPanel value={value} index={1}><Registration /></TabPanel>
                </Box>
            </Card>

        </Grid>
    </Grid>    
    </ThemeProvider>
    </>
  )
}

export default ResLogin;