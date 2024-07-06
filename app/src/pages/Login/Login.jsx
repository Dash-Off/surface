import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LoginImage from '../../assets/LoginImage.jpg';
// import { makeStyles } from '@mui/material/styles';

import React, { useEffect } from 'react'
import { LuLoader } from "react-icons/lu";


const Login = () => {

    // Use useMediaQuery hook to check for screen size
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // 600px for small and extra small screens
    const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));  // 0px (extra small devices, mobiles)
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));   // 600px (small devices, mobiles, this is max-width for small screens) 
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));  // 960px (medium devices, small laptops)


    // const paperStyle = {padding : 20, height: '70vh', width: 380, margin: "20px auto"}
    // const paperStyle1= {
    //     padding: 20, // Adjust padding as needed
    //     height: 'auto', // Adjust height or set to 'auto' for dynamic adjustment
    //     width: isSmallScreen ? 'auto' : 1000, // Adjust width as needed or use percentage
    //     // height: 800, // Adjust height or set to 'auto' for dynamic adjustment
    //     margin: isSmallScreen ? '0px 20px' : 'auto',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between', // Ensures space between content and image
    //     alignItems: 'center', // Vertically aligns items in the center
    //     // backgroundColor: 'red', // Set the background color
    //     borderRadius: '20px', // Optional: Adds a border radius
    // }

    const paperStyle = {
        padding: isXSmall ? 2 : isSmall ? 5 : 10,
        height: 'auto',
        width: isXSmall ? 'auto' : isSmall ? '80%' : isMedium ? 'auto' : 1000,
        margin: isXSmall ? '0px 10px' : 'auto',
        display: 'flex',
        flexDirection: isXSmall ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '20px',
    };

    const signInCompStyle = { 
        padding :'0px 50px', 
        width: isXSmall ? 'auto' : isSmall ? 'auto' : isMedium ? 'auto' : '350px', 
        margin: isMedium ? '' : '2px 12px'
    }

    const avatarStyle = {backgroundColor: '#210503'}

    const buttonStyle = {
        margin: '1px 0',
        backgroundColor: '#a68585',
        borderRadius: '10px',
        // width: isXSmall ? 'auto' : isSmall ? 'auto' : isMedium ? 'auto' : 'auto',
    }
    
    const googleSignInStyle = {
        margin: '8px 0',
        backgroundColor: 'white',
        borderRadius: '10px',
        fontWeight: 'bold',
        color: 'black',
        border: '1px solid #210503',
    }

    const imageStyle = {
        width: '100%', 
        height: '100%', 
        marginLeft: '10px', 
        borderRadius: '20px',
        // width: isXSmall ? '' : isSmall ? '' : isMedium ? 'auto' : 'auto',
    }
    const textFieldStyle = {
        marginTop: '7px',
        // borderRadius: '30px',

    }

    useEffect(() => {
        // Store the original background color
        const originalBackgroundColor = document.body.style.backgroundColor;
        
        // Set the new background color
        document.body.style.backgroundColor = '#f5f7fa'; // Your desired color
        
        // Cleanup function to reset the background color
        return () => {
            document.body.style.backgroundColor = originalBackgroundColor;
        };
    }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
        <Grid style={{ marginTop: '120px'}}>
            <Paper elevation={10} style={paperStyle}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        
                        {/* <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}> */}
                            
                            <div style={{display : 'flex', alignItems : 'center', marginBottom : isSmall ? '1px' : '120px'}}>
                                <div style={{display : 'flex', fontSize: '30px', color: '#a68585',}}>
                                    <LuLoader />
                                </div>
                                <Typography style={{ margin : '0px 5px',  fontSize: '24px',  color: '#210503'}}>Dash<strong>Off</strong></Typography>
                            </div>

                                <div style = {signInCompStyle}>
                                    <Grid>
                                        {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
                                        <h1 style={{ fontWeight: 'bold', fontSize: '36px' }} >Sign In</h1> 
                                        <h6 style ={{color : '#ada9a8'}}>Please login to continue to your account</h6>
                                    </Grid>
                                </div>

                                <div style = {signInCompStyle}>
                                    <TextField InputProps={{style: {borderRadius: '15px',} }} style={textFieldStyle} id="outlined-basic" label="Email Address" variant="outlined"  fullWidth required/>
                                    <TextField InputProps={{style: {borderRadius: '15px',} }} style={textFieldStyle} id="outlined-basic" label="Password" type='password' variant="outlined" fullWidth required />
                                    <FormControlLabel 
                                        control={<Checkbox 
                                        name="checkedB"
                                        color="primary"/>} 
                                        label="Remember me" />
                                        
                                    <Button type='submit' color='primary' variant='contained' style={buttonStyle} fullWidth> Sign in</Button>
                                    
                                    <Typography>
                                        <Link sx={{ fontSize: '15px', ':hover': { color: 'green' }}} href="#">Forgot password ?</Link>  
                                    </Typography>
                                    <Typography sx={{ fontSize: '15px',}}>
                                        Need an account ? <Link sx={{ fontSize: '15px', ':hover': { color: 'green' }}} href="#">Sign Up</Link>  
                                    </Typography>

                                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' , margin: '2px 0px'}}>
                                        <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
                                        <div style={{ padding: '0 10px' }}>Or</div>
                                        <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
                                    </div>

                                    <Button type='submit' color='primary' variant='contained' style={googleSignInStyle} fullWidth> Sign in with Google <GoogleIcon style={{ verticalAlign: 'middle', marginRight: '8px', fontSize: '24px', color: '#DB4437' }}/></Button>
                            
                                </div>
                            {/* </div>   */}

                        {/* </div> */}

                    </div>

                    {/* Conditionally render the image based on screen size */}
                    {!isSmallScreen && <img src={LoginImage} alt="Login" style={imageStyle} />}
        
                </div>
            </Paper>           
        </Grid>
    </div>
  )
}

export default Login