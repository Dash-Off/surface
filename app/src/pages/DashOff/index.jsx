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
import {
  COMPLETED_DASHOFFS_STATES,
  INSERT_COLOR,
  SENTIMENT_SPIKE_COLOR,
  UPDATE_COLOR,
} from "../../utils/constants.js";
import Score from "../../components/Score/index.jsx";
import DashOffMenuBar from "../../components/DashOffMenuBar/index.jsx";
import { getRandomHexColor } from "../../utils/helper.js";
import ScorePane from "../../components/Score/ScorePane.jsx";
import Legend from "../../components/Score/Legend.jsx";

const DashOff = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const currentDashOff = useSelector(getCurrent());
  const user = useSelector(getUser());
  const highlightText = (quill, scores) => {
    quill.formatText(0, quill.getLength(), "background", "white"); // reset highlights
    scores.corrections.map((correction) => {
      if (correction["correctionType"] == "SENTI") {
        let sentence = correction["actual"];
        const sentenceIndex = quill.getText().indexOf(sentence);
        quill.formatText(
          sentenceIndex,
          sentenceIndex + sentence.length,
          "background",
          SENTIMENT_SPIKE_COLOR,
        );
      } else if (correction["correctionType"] == "GRAMMAR") {
        let sentence = correction["actual"];
        const sentenceIndex = quill.getText().indexOf(sentence);
        const suggestion = correction["suggestion"];
        const wordIndex = sentence.indexOf(
          suggestion["actual"],
          suggestion["pos"],
        );
        const replacement = suggestion["replacement"];
        if (suggestion["actual"] === "") {
          let word = sentence.split(" ")[suggestion["pos"] + 1];
          quill.insertText(
            sentenceIndex + sentence.indexOf(word),
            replacement + " ",
            {
              color: INSERT_COLOR,
            },
          );
        } else if (replacement === "") {
          quill.deleteText(sentenceIndex + wordIndex, replacement.word);
        } else {
          quill.deleteText(
            sentenceIndex + wordIndex,
            suggestion["actual"].length,
          );
          quill.insertText(sentenceIndex + wordIndex, replacement, {
            color: UPDATE_COLOR,
          });
        }
      }
    });
  };

  useEffect(() => {
    let quillEditor;
    if (currentDashOff.id && editorRef.current && currentDashOff.scores) {
      quillEditor = editorRef.current.getEditor();
      highlightText(quillEditor, currentDashOff.scores);
    }
  });
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
      {currentDashOff.status === "EVALUATED" && (
        <Grid
          padding={"0 7vw"}
          display={"flex"}
          mt={"30px"}
          mb="20px"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <ScorePane scores={currentDashOff.scores} />
          <Legend />
        </Grid>
      )}
      <Grid
        display={"flex"}
        justifyContent={"space-around"}
        //flexWrap={"wrap"}
        sx={{ padding: "4vh 5vw" }}
      >
        <Paper
          sx={{
            padding: "10px",
            minHeight: "90vh",
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
            value={currentDashOff.markup}
            readOnly
            theme="bubble"
          />
        </Paper>
        {currentDashOff && currentDashOff.status === "EVALUATED" && (
          <Paper
            sx={{
              padding: "10px",
              minHeight: "90vh",
              overflowY: "auto",
              marginLeft: "8px",
            }}
            variant="outlined"
            elevation={2}
          >
            <Typography
              className={`heading visible`}
              sx={{ padding: "20px", visibility: "hidden" }}
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
        )}
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
