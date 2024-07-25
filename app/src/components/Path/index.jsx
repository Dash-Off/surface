import { Grid, Typography } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";

const Path = ({ headingVisible, type, title }) => {
  return (
    <Grid
      className={`heading ${headingVisible ? "visible" : ""}`}
      display={"flex"}
      alignItems={"center"}
    >
      <Typography fontSize={16} color={"secondary.light"}>
        {" "}
        {type == "SELF" ? "My DashOff" : "Challenges"}
      </Typography>
      <BsChevronRight
        style={{ fontSize: "16px", fontWeight: "bold", margin: "0px 12px" }}
      />
      <Typography fontSize={16} color={"secondary.light"}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Path;
