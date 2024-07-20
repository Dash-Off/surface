import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance';
import { validateEmail } from '../../utils/helper'
import { Button, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Box, useMediaQuery, Fade, FormControlLabel, Checkbox } from '@mui/material';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate()
    
    const isSmallScreen = useMediaQuery('(max-width:1000px)'); // 600px for small and extra small screens

    const imageStyle = {
        width: '100%', 
        height: '90vh', 
        marginLeft: '10px', 
        borderRadius: '20px',
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // console.log('Login clicked');
        if (!validateEmail(email)) {
            console.log('Invalid email');
            setError('Please enter a valid email');
            return;
        }
    
        if(!password) {
          setError('Please enter the password');
          return;
        }
    
        setError("");
    
        //Login API Call
        try{

            console.log('email : ', email);
            console.log('password : ', password);
            const response = await axiosInstance.post('/api/v1/auth/login', {
                username: email,
                password:  password,
          });
          
          console.log('response : ', response);
          console.log('response.data : ', response.data);
          console.log('response.data.accessToken : ', response.data.accessToken);

          // Handle successful login response
        //   if (response.data && response.data.accessToken){
        if (response.data ){
            localStorage.setItem('token', response.data.accessToken);
            // localStorage.setItem('refreshToken', response.data.refreshToken);
            // window.location.href = '/dashboard';
            console.log('Login successful inside login.js');
            navigate('/dashboard')
          }
        }catch(error){
          if(error.response && error.response.data && error.response.data.message){
            console.log('error ! : ', error.response.data.message);
            setError(error.response.data.message);
          }else{
            console.log('error : ', error);
            setError('Something went wrong. Please try again later');
          }
        }
      };


  return (
    <div>
        <Grid
          display={"flex"}
          padding={"24px"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
            <div>

            <Fade timeout={1000} appear in>
                
                <Typography
                sx={{
                    // mt: "1vh",
                    fontSize: { xs: "15px", sm: "25px" },
                    textAlign: { xs: "left", sm: "left", lg: "left" },
                    fontWeight: "bold",
                }}
                color={"primary"}
                variant="h1"
                >
                <strong>Sign In</strong>
                </Typography>
            </Fade>
            
            
            <Fade timeout={1000} appear in>
                <Typography
                sx={{
                    fontSize: { xs: "15px", sm: "15px" },
                    textAlign: { xs: "left", sm: "left", lg: "left" },
                }}
                color={"#ada9a8"}
                variant="h6"
                >
                    Please login to continue to your account
                </Typography>
            </Fade>
            
            
            <Fade timeout={2000} appear in>
                <Grid
                    sx={{
                        display: "flex",
                        padding: "24px",
                        alignItems:"center",
                        flexDirection: "column",
                        width: {
                          xs: '60vw', //  xsmall devices size in pixels is 0px
                          sm: '50vw',  // small devices size in pixels is 600px
                          md: '30vw',  // medium devices size in pixels is 960px
                          lg: '20vw'  // large devices size in pixels is 1280px
                        }
                      }}
                >
            
                    <TextField 
                        InputProps={{style: {borderRadius: '15px',} }} 
                        type='email'
                        sx={{                    
                            marginTop: '20px',
                            marginRight: '20px',
                            width: { sm : '60vw', md: '30vw' ,lg: '20vw'},
                        }}
                        id="login-email-input" label="Email Address" variant="outlined"  
                        fullWidth required                    
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    

                    <TextField
                        id="login-password-input" 
                        InputProps={{style: {borderRadius: '15px',} }}
                        type='password'
                        sx={{                    
                            marginTop: '20px',
                            marginRight: '20px',
                            width: { sm : '60vw', md: '30vw' ,lg: '20vw'},
                        }}
                        label="Password" variant="outlined"  
                        fullWidth required
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                    
                       <FormControlLabel 
                            sx={{ 
                                width: { xs: '50vw' ,sm : '60vw', md : '30vw',lg: '20vw'},
                            }}

                            control={<Checkbox 
                            name="checkBox"
                            color="primary"/>} 
                            label="Remember me" />
                        
                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                    
                    <Button size="large"
                        sx={{
                            // padding: "5px 10px",
                            padding: { md: '5px 100px',lg: '5px 10px'},
                            mt: "50px",
                            backgroundColor: "secondary.dark",
                            width: { xs: '50vw' ,sm : '60vw', md : '30vw',lg: '20vw'},
                            marginTop: '20px',
                            marginRight: { xs:'20px' , sm : '20px', md: '20px' ,lg: '20px'},                            
                        }}
                        onClick={handleLogin}
                        type='submit'
                        variant="contained"
                    >
                        <Typography color={"white"} fontWeight={"400"} fontSize="15px">
                            Login
                        </Typography>
                    </Button>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        textAlign: 'center', 
                        marginTop: '20px',    
                        marginBottom: '2px',
                        width: {  xs: '50vw' , sm : '60vw', md : '30vw',lg: '20vw'},
                    }}>
                            <Box sx={{ flex: 1, height: '1px', backgroundColor: 'secondary.dark' }}></Box>
                            <Box sx={{ padding: '0 10px' }}>Or</Box>
                            <Box sx={{ 
                                flex: 1, 
                                height: '1px', 
                                backgroundColor: 'secondary.dark',
                                marginRight: { xs: '10px' ,sm : '10px', md: '10px' ,lg: '10px'},
                            }}></Box>
                    </Box>
                    
                    {/* <Typography color={"#ada9a8"} fontWeight={"400"} fontSize="15px">  */}
                        <a href="/login">
                            <Typography sx={{
                                    ml: '2px',
                                    textDecoration : 'underline', 
                                    color : 'secondary.dark',
                                    ':hover': { color: 'black'},
                                    width: { xs: '50vw' ,sm : '60vw', md : '30vw',lg: '20vw'},
                                
                                }}
                                
                                variant='span' >
                                Forgot Password ?
                            </Typography>
                        </a>
                    

                    <Typography color={"#ada9a8"} fontWeight={"400"} fontSize="15px">
                        {/* Need an account ?
                        <a href="/signup">
                            <Typography sx={{
                                    ml: '2px',
                                    textDecoration : 'underline', 
                                    color : 'secondary.dark',
                                    ':hover': { color: 'black'}}
                                }
                                variant='span' >
                                Sign Up
                            </Typography>
                        </a> */}
                        Need an account ?
                            <span
                                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'secondary.dark', marginLeft: '2px' }}
                                onClick={props.onSignUpClick} // Use the passed function on click
                            >
                                <Typography sx={{
                                    ml: '2px',
                                    textDecoration : 'underline', 
                                    color : 'secondary.dark',
                                    ':hover': { color: 'black'}}
                                }
                                variant='span' >
                                    Sign Up
                                </Typography>
                            </span>
                    </Typography>
                    
                    {/* <Button
                         onClick={handleLogin}
                     >Click Me</Button> */}

                    </Grid>
                </Fade>                
            </div>            
        </Grid>
    </div>
  )
}

export default Login