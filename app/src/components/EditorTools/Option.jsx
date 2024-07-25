import { IconButton, Tooltip } from "@mui/material";

const Option = ({ handleClick, title, Icon }) => {
  return (
    <Tooltip title={title} arrow placement="right">
      <IconButton onClick={handleClick}>
        <Icon sx={{ fontSize: "20px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default Option;
