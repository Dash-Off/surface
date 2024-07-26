import { Fade, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getUser } from "../../store/user-slice";

const WelcomeTitle = () => {
  const user = useSelector(getUser());

  return (
    <Fade timeout={3000} appear in>
      <Typography color={"primary"} variant="h2" textAlign={"center"}>
        Welcome {user.name}
      </Typography>
    </Fade>
  );
};

export default WelcomeTitle;
