import {
    Button,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Fade,
    FormControlLabel,
    Checkbox,
  } from "@mui/material";

import React, { useState } from 'react'
import ParticleBackground from '../../components/ParticleBackground'
import Sidebar1 from '../../components/Sidebar/Sidebar1';

import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import * as api from "../../utils/api.js";
import Authenticate from "../../components/Authenticate/index.jsx";


const Profile = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPasswordFields, setShowPasswordFields] = useState(false);


    const navigate = useNavigate();

    const handleProfileUpdate = async (e) => {
      e.preventDefault();
  
      if (!name) {
        console.log("Please enter your name");
        setError("Please enter your name");
        return;
      }
  
      if (!validateEmail(email)) {
        console.log("Please enter a valid email");
        setError("Please enter a valid email");
        return;
      }
  
      if (!password) {
        console.log("Please enter your password");
        setError("Please enter your password");
        return;
      }
  
      await api.registerUser({
        name: name,
        gender: "MALE",
        email: email,
        passwordConfirmation: confirmPassword,
        password: password,
      });
    };

    const gradientBgStyle = {
        backgroundImage : 'linear-gradient(to right top, #6e43a3, #9f439c, #c44890, #e05582, #f36a74, #fa796c, #fe8965, #ff9960, #ffa35d, #ffad5b, #ffb759, #ffc259)',
        height: '100vh',
      };

    

  return (
    <Authenticate>
    <Box style={gradientBgStyle}>
        <ParticleBackground />
        <Box className="flex"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Sidebar1/> 
            <Box
                sx={{
                    marginTop: "10vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>

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
                        <strong>Profile Details</strong>
                        </Typography>
                    </Fade>                    

                    <Fade timeout={2000} appear in>
                        <Grid
                        sx={{
                            display: "flex",
                            padding: "24px",
                            // alignItems: "center",
                            flexDirection: "column",
                            width: {
                            xs: "60vw", //  xsmall devices size in pixels is 0px
                            sm: "50vw", // small devices size in pixels is 600px
                            md: "30vw", // medium devices size in pixels is 960px
                            lg: "20vw", // large devices size in pixels is 1280px
                            },
                        }}
                        >
                        <TextField
                            InputProps={{ style: { borderRadius: "15px" } }}
                            sx={{
                            marginTop: "20px",
                            marginRight: "20px",
                            width: { sm: "60vw", md: "30vw", lg: "20vw" },
                            }}
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            required
                        />

                        <FormControl
                            className="form-control"
                            sx={{
                            marginTop: "20px",
                            marginRight: "20px",
                            width: { xs: "50vw", sm: "60vw", md: "30vw", lg: "20vw" },
                            }}
                        >
                            <InputLabel id="gender-select-label">Gender</InputLabel>
                            <Select
                            labelId="gender-select-label"
                            id="gender-select"
                            label="Gender"
                            required
                            defaultValue=""
                            sx={{
                                borderRadius: "15px",
                                ".MuiOutlinedInput-notchedOutline": {
                                borderRadius: "15px",
                                },
                            }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            InputProps={{ style: { borderRadius: "15px" } }}
                            sx={{
                            marginTop: "20px",
                            marginRight: "20px",
                            width: { sm: "60vw", md: "30vw", lg: "20vw" },
                            }}
                            id="signup-email-input"
                            label="Email Address"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                        
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={showPasswordFields}
                                    onChange={(e) => setShowPasswordFields(e.target.checked)}
                                />
                            }
                            label="Change Password"
                        />

                        {showPasswordFields && (
                            <>
                            <Fade timeout={1000} appear in>
                                
                                    <TextField
                                        id="old-password-input"
                                        InputProps={{ style: { borderRadius: "15px" } }}
                                        type="password"
                                        sx={{
                                        marginTop: "20px",
                                        marginRight: "20px",
                                        width: { sm: "60vw", md: "30vw", lg: "20vw" },
                                        }}
                                        label="Old Password"
                                        variant="outlined"
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                </Fade> 

                                <Fade timeout={1000} appear in>
                                    <TextField
                                        id="new-password-input"
                                        InputProps={{ style: { borderRadius: "15px" } }}
                                        type="password"
                                        sx={{
                                        marginTop: "20px",
                                        marginRight: "20px",
                                        width: { sm: "60vw", md: "30vw", lg: "20vw" },
                                        }}
                                        label="New Password"
                                        variant="outlined"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                </Fade>
                                
                          
                        </>
                        )}

                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <Button
                            size="large"
                            sx={{
                            // padding: "5px 10px",
                            padding: { md: "5px 100px", lg: "5px 10px" },
                            mt: "50px",
                            backgroundColor: "secondary.dark",
                            width: { xs: "50vw", sm: "60vw", md: "30vw", lg: "20vw" },
                            marginTop: "20px",
                            marginRight: {
                                xs: "20px",
                                sm: "20px",
                                md: "20px",
                                lg: "20px",
                            },
                            }}
                            variant="contained"
                            onClick={handleProfileUpdate}
                        >
                            <Typography color={"white"} fontWeight={"400"} fontSize="15px">
                            Save
                            </Typography>
                        </Button>                        

                        </Grid>
                    </Fade>
                    </div>
                </Grid>
            </Box>


        </Box>
    </Box>
    </Authenticate>
  )
}

export default Profile