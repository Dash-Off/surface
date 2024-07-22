import { useEffect, useState, useRef } from "react";
import Authenticate from "../../components/Authenticate/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCurrentDashOff, saveDashOff } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../store/dashoff-slice";
import ReactQuill from "react-quill";
import { Grid, Paper, Typography } from "@mui/material";
import Path from "../../components/Path/index.jsx";
import { writingContentCache } from "../../utils/helper.js";
import debounce from "lodash/debounce";
import moment from "moment";
import TimeUpModal from "../../components/TimeUpModal/index.jsx";
import Timer from "../../components/Timer/index.jsx";
import Expired from "./Expired.jsx";
import EditorTools from "../../components/EditorTools/index.jsx";
import { COMPLETED_DASHOFFS_STATES } from "../../utils/constants.js";

const Editor = () => {
  const [value, setValue] = useState("");
  const [headingVisible, setHeadingVisible] = useState(true);
  const [mainHeadingVisible, setMainHeadingVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(-1);
  const [timeup, setTimeUp] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const timeoutRef = useRef(null);
  const maintimeoutRef = useRef(null);
  const currentDashOff = useSelector(getCurrent());

  const adjustScroll = () => {
    if (editorRef.current) {
      const quillEditor = editorRef.current.getEditor();
      const editorElem = quillEditor.root;
      const padding = 100; // Set the padding value
      const editorHeight = editorElem.clientHeight;
      const scrollHeight = editorElem.scrollHeight;
      const scrollTop = editorElem.scrollTop;
      editorElem.scrollIntoView(false);
      if (scrollHeight - scrollTop - editorHeight < padding) {
        editorElem.scrollTop = document.body.scrollHeight;
      }
    }
  };

  const showHeading = () => {
    setHeadingVisible(true);
    setMainHeadingVisible(true);
    clearTimeout(timeoutRef.current);
    clearTimeout(maintimeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHeadingVisible(false);
    }, 3000); // Hide the heading after 2 seconds of inactivity
    maintimeoutRef.current = setTimeout(() => {
      setMainHeadingVisible(false);
    }, 9000); // Hide the heading after 9 seconds of inactivity
  };

  const debouncedSaveToApi = useRef(debounce(saveDashOff, 1000)).current; // 3 seconds debounce

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let quillEditor = undefined;
    let adjustScrollOnDelete = undefined;
    if (!currentDashOff.id) {
      dispatch(fetchCurrentDashOff(id));
    } else {
      if (currentDashOff.raw && !writingContentCache.get(id)) {
        // Update stale cache
        writingContentCache.save(
          currentDashOff.id,
          currentDashOff.raw,
          currentDashOff.markup,
        );
      }
      if (editorRef.current) {
        quillEditor = editorRef.current.getEditor();
        const editorElem = quillEditor.root;
        adjustScrollOnDelete = () => {
          setTimeout(() => {
            // Delay scrolling to ensure content update
            const padding = 100; // Set the padding value
            const editorHeight = editorElem.clientHeight;
            const scrollHeight = editorElem.scrollHeight;
            const scrollTop = editorElem.scrollTop;

            if (scrollHeight - scrollTop - editorHeight < padding) {
              editorElem.scrollTop = scrollHeight;
            }
          }, 0);
        };
        editorElem.addEventListener("copy", preventCopyPaste);
        editorElem.addEventListener("cut", preventCopyPaste);
        editorElem.addEventListener("paste", preventCopyPaste);
        quillEditor.on("text-change", adjustScrollOnDelete);
      }
    }
    document.addEventListener("mousemove", showHeading);

    return () => {
      if (quillEditor) {
        quillEditor.off("text-change", adjustScrollOnDelete);
        quillEditor.root.removeEventListener("copy", preventCopyPaste);
        quillEditor.root.removeEventListener("cut", preventCopyPaste);
        quillEditor.root.removeEventListener("paste", preventCopyPaste);
      }
      document.removeEventListener("mousemove", showHeading);
    };
  }, [id]);

  useEffect(() => {
    let interval = undefined;
    let deadLine;
    if (currentDashOff && currentDashOff.duration !== -1 && !interval) {
      deadLine = moment(currentDashOff.createdAt).add(
        currentDashOff.duration,
        "seconds",
      );

      interval = setInterval(() => {
        let remaining = deadLine.diff(moment());
        if (remaining <= 0) {
          setRemainingTime(0);
          setTimeUp(true);
          clearInterval(interval);
        } else {
          setRemainingTime(remaining);
        }
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }
    };
  }, [currentDashOff.duration]);

  useEffect(() => {
    const savedValue = writingContentCache.get(id);
    if (savedValue) {
      setValue(savedValue.markup);
    }
  }, [value]);

  const handleChange = (content, delta, source, editor) => {
    writingContentCache.save(id, editor.getText(), content);
    debouncedSaveToApi({
      dash_off_id: id,
      raw: editor.getText(),
      markup: content,
    });
    setValue(content);
    adjustScroll();
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["clean"],
    ],
  };
  if (
    currentDashOff.id &&
    COMPLETED_DASHOFFS_STATES.includes(currentDashOff.status)
  ) {
    navigate(`/dashoffs/${currentDashOff.id}`);
  }
  if (!currentDashOff.id || currentDashOff.status == "EXPIRED") {
    return <Expired />;
  }

  return (
    <Authenticate>
      <Grid
        sx={{
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px",
        }}
      >
        <Path
          headingVisible={headingVisible}
          type={currentDashOff.type}
          title={currentDashOff.title}
        />
        {remainingTime !== -1 && (
          <Timer
            remainingTime={remainingTime}
            progress={(remainingTime / (currentDashOff.duration * 1000)) * 100}
          />
        )}
        <Paper
          sx={{
            padding: "10px",
            mt: "30px",
            minHeight: "80vh",
          }}
          variant="outlined"
          elevation={2}
        >
          <Typography
            className={`heading ${mainHeadingVisible ? "visible" : ""}`}
            sx={{ padding: "20px" }}
            variant="h6"
          >
            {currentDashOff.headline}
          </Typography>
          <Typography
            sx={{ fontStyle: "italic", padding: "20px", color: "#787887" }}
          >
            {currentDashOff.description}
          </Typography>
          <ReactQuill
            id="editor"
            ref={editorRef}
            value={value}
            onChange={handleChange}
            placeholder={"Start writing your story here..."}
            modules={modules}
            theme="bubble"
          />
        </Paper>
        <EditorTools dashOffId={currentDashOff.id} />
      </Grid>
      <TimeUpModal
        dashOff={currentDashOff || {}}
        open={timeup}
        handleClose={() => setTimeUp(false)}
      />
    </Authenticate>
  );
};

export default Editor;
