import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Grid, Fade } from "@mui/material";
import Option from "./Option.jsx";
import * as api from "../../utils/api";

const EditorTools = ({ dashOffId }) => {
  const [barVisible, setBarVisible] = useState(true);
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(api.completeDashOff(dashOffId));
  };
  const showBar = () => {
    setBarVisible(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setBarVisible(false);
    }, 3000); // Hide the heading after 2 seconds of inactivity
  };

  useEffect(() => {
    document.addEventListener("mousemove", showBar);

    return () => {
      document.removeEventListener("mousemove", showBar);
    };
  }, []);

  return (
    <Fade in={barVisible}>
      <Grid
        sx={{
          position: "fixed",
          top: "40vh",
          left: 0,
          border: "1px solid lightgray",
          padding: "24px 8px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Option
          handleClick={handleComplete}
          title="Complete DashOff & Exit"
          Icon={DoneAllIcon}
        />
      </Grid>
    </Fade>
  );
};

export default EditorTools;
