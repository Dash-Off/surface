import { Modal, Typography, Box, Grid, Button } from "@mui/material";
import * as api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { writingContentCache } from "../../utils/helper";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  border: "0",
  boxShadow: 24,
  p: 4,
};

const TimeUpModal = ({ dashOff, open }) => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(api.expireDashOff(dashOff.id, dashOff.challengeId));
  };
  const saveAndExit = () => {
    dispatch(api.completeDashOff(dashOff.id));
  };
  return (
    <Modal
      open={open}
      onClose={() => {}}
      aria-labelledby="timeup-modal"
      aria-describedby="Options when the timeup of modal"
      keepMounted
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Time Up !
        </Typography>
        <Typography sx={{ mt: 2 }}>
          The dashoff has exceeded the time limit. Save the content and exit,
          else restart the timer.
        </Typography>
        <Grid flex sx={{ mt: "28px" }}>
          <Button
            onClick={saveAndExit}
            variant="contained"
            sx={{ color: "white" }}
          >
            Save & Exit
          </Button>
          {dashOff.challengeId && (
            <Button sx={{ ml: "12px" }} onClick={handleRestart}>
              Restart
            </Button>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default TimeUpModal;
