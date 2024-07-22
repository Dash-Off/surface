import { Box, Typography, Skeleton, Grid } from "@mui/material";
import { OWNER_ROLE } from "../../utils/constants";
import TimelapseIcon from "@mui/icons-material/Timelapse";
const Score = ({ dashOff }) => {
  if (!dashOff || dashOff.type !== OWNER_ROLE) {
    //return null;
  }
  return (
    <Box display={"flex"}>
      {dashOff.status !== "EVALUATED" && (
        <Grid width={"35vw"} margin={"auto"} textAlign={"center"}>
          <TimelapseIcon sx={{ color: "#787887", fontSize: "44px" }} />
          <Typography fontStyle={"italic"} component="div">
            Evaluation in progress....
          </Typography>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
      )}
    </Box>
  );
};

export default Score;
