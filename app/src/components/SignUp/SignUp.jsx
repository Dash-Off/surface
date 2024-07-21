import { useState } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import * as api from "../../utils/api.js";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log('Inside handleSignUp')

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
              <strong>Sign Up</strong>
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
              Sign up to Get Started with DashOff
            </Typography>
          </Fade>

          <Fade timeout={2000} appear in>
            <Grid
              sx={{
                display: "flex",
                padding: "24px",
                alignItems: "center",
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

              <TextField
                id="signup-password-input"
                InputProps={{ style: { borderRadius: "15px" } }}
                type="password"
                sx={{
                  marginTop: "20px",
                  marginRight: "20px",
                  width: { sm: "60vw", md: "30vw", lg: "20vw" },
                }}
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />

              <TextField
                id="outlined-confirm-password-input"
                InputProps={{ style: { borderRadius: "15px" } }}
                type="password"
                sx={{
                  marginTop: "20px",
                  marginRight: "20px",
                  width: { sm: "60vw", md: "30vw", lg: "20vw" },
                }}
                label="Confirm Password"
                variant="outlined"
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
              />

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
                onClick={handleSignUp}
              >
                <Typography color={"white"} fontWeight={"400"} fontSize="15px">
                  Sign Up
                </Typography>
              </Button>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "2px",
                  width: { xs: "50vw", sm: "60vw", md: "30vw", lg: "20vw" },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "secondary.dark",
                  }}
                ></Box>
                <Box sx={{ padding: "0 10px" }}>Or</Box>
                <Box
                  sx={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "secondary.dark",
                    marginRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                ></Box>
              </Box>

              <Typography color={"#ada9a8"} fontWeight={"400"} fontSize="15px">
                {/* Already have an account ? 
                        <a href="/login">
                            <Typography sx={{
                                    ml: '2px',
                                    textDecoration : 'underline', 
                                    color : 'secondary.dark',
                                    ':hover': { color: 'black'}}
                                }
                                variant='span' >
                                Sign In
                            </Typography>
                        </a> */}
                Already have an account ?
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "secondary.dark",
                    marginLeft: "2px",
                  }}
                  onClick={props.onSignInClick} // Use the passed function on click
                  role="presentation"
                >
                  <Typography
                    sx={{
                      ml: "2px",
                      textDecoration: "underline",
                      color: "secondary.dark",
                      ":hover": { color: "black" },
                    }}
                    variant="span"
                  >
                    Sign In
                  </Typography>
                </span>
              </Typography>
            </Grid>
          </Fade>
        </div>
      </Grid>
    </div>
  );
};

export default SignUp;
