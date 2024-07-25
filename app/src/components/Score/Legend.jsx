import { Grid, Stack, Typography, Chip } from "@mui/material";
import {
  INSERT_COLOR,
  SENTIMENT_SPIKE_COLOR,
  UPDATE_COLOR,
} from "../../utils/constants.js";

const Legend = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        padding: "12px",
        borderRadius: "12px",
        border: "1px solid #e3e3f9",
      }}
    >
      <Typography variant="small" fontSize={12}>
        Suggestion Color Scheme:
      </Typography>
      <Stack direction="row" spacing={1} mt={2}>
        <Chip
          sx={{
            fontSize: "10px",
            color: "white",
            backgroundColor: INSERT_COLOR,
          }}
          label="Inserts"
        />
        <Chip
          sx={{
            fontSize: "10px",
            color: "white",
            backgroundColor: UPDATE_COLOR,
          }}
          label="Update"
        />
        <Chip
          sx={{
            fontSize: "10px",
            color: "white",
            backgroundColor: SENTIMENT_SPIKE_COLOR,
          }}
          label="Emotional Slide"
        />
      </Stack>
    </Grid>
  );
};

export default Legend;
