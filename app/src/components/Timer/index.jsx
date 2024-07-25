import { Typography, Box, CircularProgress } from "@mui/material";
import { getTimerSafeNumber } from "../../utils/helper";

const Timer = ({ remainingTime, progress }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "3vh",
        right: "3vw",
        backgroundColor: "white",
      }}
    >
      <Typography
        fontWeight={"bold"}
        align="center"
        sx={{ mb: "8px" }}
        fontSize={12}
      >
        Time Left:
      </Typography>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          sx={{ border: "1px solid primary" }}
          variant="determinate"
          value={progress}
          size={80}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">
            <div>
              <div>
                {getTimerSafeNumber(
                  Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
                )}
                :
                {getTimerSafeNumber(
                  Math.floor((remainingTime / 1000 / 60) % 60),
                )}
                :{getTimerSafeNumber(Math.floor((remainingTime / 1000) % 60))}
              </div>
            </div>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Timer;
