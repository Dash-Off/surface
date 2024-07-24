import { Button, Grid, IconButton, Snackbar, Tooltip } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { publishDashOff } from "../../utils/api";
import { useDispatch } from "react-redux";

const DOMAIN = "https://dashoff.com";

const DashOffMenuBar = ({ dashOff }) => {
  const [showShare, setShowShare] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePublish = () => {
    dispatch(publishDashOff(dashOff.id, !dashOff.public));
  };
  const handleShare = () => {
    navigator.clipboard.writeText(DOMAIN + `/dashoffs/${dashOff.id}/preview`);
    setShowShare(true);
  };
  const handleBackClick = () => {
    navigate("/dashboard");
  };
  const preview = () => {
    window.open(
      `/dashoffs/${dashOff.id}/preview`,
      "_blank",
      "rel=noopener noreferrer",
    );
  };

  return (
    <Grid
      display={"flex"}
      sx={{
        backgroundColor: "white",
        width: "100vw",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
      }}
      justifyContent={"space-between"}
      padding="18px 24px"
    >
      <div>
        <Tooltip title="My DashOffs Page" arrow placement="bottom">
          <IconButton onClick={handleBackClick}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        {dashOff.public && (
          <Tooltip title="Get published link" arrow placement="bottom">
            <IconButton onClick={handleShare}>
              <ShareIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
        )}
        {dashOff.public && (
          <Tooltip title="Preview" arrow placement="bottom">
            <IconButton onClick={preview} sx={{ ml: "8px" }}>
              <VisibilityIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Publish your content online" arrow placement="bottom">
          <Button
            size="small"
            color="secondary"
            sx={{
              ml: "8px",
              color: "white",
              textTransform: "none",
              fontSize: "12px",
            }}
            variant="contained"
            onClick={handlePublish}
          >
            {dashOff.public ? "Archive" : "Publish"}
          </Button>
        </Tooltip>
      </div>
      <Snackbar
        open={showShare}
        autoHideDuration={1500}
        onClose={() => setShowShare(false)}
        message="Share link copied to clipboard"
      />
    </Grid>
  );
};

export default DashOffMenuBar;
