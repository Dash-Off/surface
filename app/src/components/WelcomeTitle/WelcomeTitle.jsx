import { Fade, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getUser } from "../../store/user-slice";

const WelcomeTitle = () => {
  const user = useSelector(getUser());

  return (
    <Fade timeout={3000} appear in>
      <Typography
        color={"primary"}
        variant="h2"
      >
        Welcome {user.name}
      </Typography>
    </Fade>
  );
};

export default WelcomeTitle;
