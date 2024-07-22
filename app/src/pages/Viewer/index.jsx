import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCurrentDashOff } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getView } from "../../store/dashoff-slice";
import ReactQuill from "react-quill";
import { Grid, Paper, Typography, Avatar, Tooltip, Chip } from "@mui/material";
import { getRandomHexColor } from "../../utils/helper";
import Expired from "../Editor/Expired.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Viewer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentDashOff = useSelector(getView());
  useEffect(() => {
    if (!currentDashOff.id) {
      dispatch(fetchCurrentDashOff(id, true));
    }
  }, [id]);

  if (!currentDashOff.id) {
    return <Expired />;
  }

  return (
    <Grid>
      <Navbar size="small" />
      <Grid
        display={"flex"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        sx={{ padding: "4vh 5vw" }}
      >
        <Paper
          sx={{
            padding: "10px",
            minHeight: "90vh",
            minWidth: "80%",
            overflowY: "auto",
          }}
          //variant="outlined"
          elevation={2}
        >
          <Typography
            className={`heading visible`}
            sx={{ padding: "20px" }}
            variant="h6"
          >
            {currentDashOff.title}
          </Typography>
          <ReactQuill
            id="viewer"
            value={currentDashOff.markup}
            readOnly
            theme="bubble"
          />
        </Paper>
      </Grid>
      <Grid sx={{ position: "fixed", bottom: "2vh", right: "2vw" }}>
        <Tooltip title="Author" arrow placement="top">
          <Chip
            color="secondary"
            avatar={
              <Avatar
                sx={{
                  fontSize: "12px",
                  padding: "2px",
                  bgcolor: getRandomHexColor(),
                }}
              >
                <Typography sx={{ fontSize: "10px", color: "white" }}>
                  {(currentDashOff.author && currentDashOff.author[0]) || "A"}
                </Typography>
              </Avatar>
            }
            label={currentDashOff.author || "Anonymous"}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Viewer;
