import React, { useState } from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login';
import { Grid, Fade, useMediaQuery, Button } from '@mui/material'
import SignUpImage from '../../assets/LoginImage.jpg';


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignUp and Login

    const toggleSignUp = () => {
      setIsSignUp(prev => !prev);
    };

    const isSmallScreen = useMediaQuery('(max-width:1000px)'); // 600px for small and extra small screens

    const imageStyle = {
        width: '100%', 
        height: '90vh', 
        marginLeft: '10px', 
        borderRadius: '20px',
    }


return (
  <div>
    <Grid
      display={"flex"}
      padding={"24px"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* <Button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
      </Button> */}

      {isSignUp ? <SignUp onSignInClick={toggleSignUp} /> :  <Login onSignUpClick={toggleSignUp} />}
    
      <Fade timeout={500} appear in>
          <div>
              {!isSmallScreen && <img src={SignUpImage} alt="Signup" style={imageStyle} />}
          </div>
      </Fade>
    </Grid>
  </div>
);
}

export default Auth;