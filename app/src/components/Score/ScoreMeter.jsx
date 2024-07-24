import { useEffect, useState } from "react";
import { Typography, CircularProgress, Box, Tooltip } from "@mui/material";

const ScoreMeter = ({ score, text, small, description }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a progress increment from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= score) {
          clearInterval(interval);
          return score;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <Box position="relative" display="inline-flex" mr={"8px"}>
      {/* <Tooltip title={description} arrow> */}
      <CircularProgress
        color="primary"
        variant="determinate"
        value={progress}
        size={small ? 120 : 200}
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
        <Typography
          variant={"h6"}
          component="div"
          color="textSecondary"
          textAlign={"center"}
        >
          <Typography fontWeight={"bold"} fontSize={small ? 20 : 28}>
            {Math.round(score, 3)}
          </Typography>
          <Typography fontSize={small ? 12 : 18}>{text}</Typography>
        </Typography>
      </Box>
      {/* </Tooltip> */}
    </Box>
  );
};

export default ScoreMeter;
