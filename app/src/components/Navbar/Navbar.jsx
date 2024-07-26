import { Typography, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import PermanentDrawerLeft from "../Sidebar/Sidebar1.jsx";

const Navbar = ({ size }) => {
  const [open, setOpen] = useState(false);
  const isSmall = size == "small";
  let positionStyles = {};
  if (isSmall) {
    positionStyles = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
    };
  }
  const close = () => {
    setOpen(false);
  };

  return (
    <Grid sx={{ py: "4px", px: isSmall ? "12px" : "24px", ...positionStyles }}>
      <div
        className={`navbar-list flex justify-between items-center relative ${isSmall ? "" : "pt-8"}`}
      >
        <div className="flex h-10 items-center">
          <h3 className="text-3xl">
            <Typography
              fontWeight={"bold"}
              sx={{ display: "inline" }}
              variant={isSmall ? "h6" : "h4"}
              color="primary.dark"
            >
              dash
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              variant={isSmall ? "h6" : "h4"}
              color="primary.light"
            >
              Off
            </Typography>
          </h3>
        </div>
        <MenuIcon
          sx={{ cursor: "pointer" }}
          color="secondary"
          onClick={() => setOpen(true)}
        />
      </div>
      <PermanentDrawerLeft open={open} close={close} />
    </Grid>
  );
};

export default Navbar;
