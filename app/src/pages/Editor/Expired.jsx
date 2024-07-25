import FolderOffIcon from "@mui/icons-material/FolderOff";
import { Button, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Authenticate from "../../components/Authenticate/index.jsx";

const Expired = () => {
  const navigate = useNavigate();
  return (
    <Authenticate>
      <Grid
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          textAlign: "center",
        }}
      >
        <div>
          <Fade in timeout={1000}>
            <FolderOffIcon sx={{ fontSize: "100px" }} />
          </Fade>
          <Fade in timeout={2000}>
            <Typography variant="h3">Invalid Link</Typography>
          </Fade>
          <Fade in timeout={3000}>
            <Typography sx={{ mt: "12px", fontSize: "14px" }} component="div">
              Seems like you followed an invalid path, <br /> Click the button
              below to go to home
            </Typography>
          </Fade>
          <Fade in timeout={5000}>
            <Button
              variant="contained"
              size="large"
              sx={{ color: "white", mt: "20px" }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Go to Dashboard
            </Button>
          </Fade>
        </div>
      </Grid>
    </Authenticate>
  );
};

export default Expired;
