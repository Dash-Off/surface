import { useEffect, useRef } from "react";
import Authenticate from "../../components/Authenticate/index.jsx";
import { useParams } from "react-router-dom";
import { fetchCurrentDashOff } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../store/dashoff-slice";
import { getUser } from "../../store/user-slice.js";
import ReactQuill from "react-quill";
import { Grid, Paper, Typography, Avatar, Tooltip, Chip } from "@mui/material";
import Expired from "../Editor/Expired.jsx";
import { COMPLETED_DASHOFFS_STATES } from "../../utils/constants.js";
import Score from "../../components/Score/index.jsx";
import DashOffMenuBar from "../../components/DashOffMenuBar/index.jsx";
import { getRandomHexColor } from "../../utils/helper.js";

const DashOff = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const currentDashOff = useSelector(getCurrent());
  const user = useSelector(getUser());
  useEffect(() => {
    if (!currentDashOff.id) {
      dispatch(fetchCurrentDashOff(id));
    }
  }, [id]);

  if (
    !currentDashOff ||
    !COMPLETED_DASHOFFS_STATES.includes(
      currentDashOff && currentDashOff.status,
    ) ||
    !currentDashOff.isOwner
  ) {
    return <Expired />;
  }

  return (
    <Authenticate>
      <DashOffMenuBar dashOff={currentDashOff} />
      <br />
      <br />
      <Grid
        display={"flex"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        sx={{ padding: "4vh 5vw" }}
      >
        <Paper
          sx={{
            padding: "10px",
            height: "90vh",
            minWidth: "52%",
            overflowY: "auto",
          }}
          variant="outlined"
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
            ref={editorRef}
            value={currentDashOff.markup}
            readOnly
            theme="bubble"
          />
        </Paper>
        <Score dashOff={currentDashOff} />
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
                  {(user && user.name[0]) || "A"}
                </Typography>
              </Avatar>
            }
            label={(user && user.name) || "Anonymous"}
          />
        </Tooltip>
      </Grid>
    </Authenticate>
  );
};

export default DashOff;
