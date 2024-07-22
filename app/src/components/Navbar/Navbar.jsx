import { Typography, Grid } from "@mui/material";

const Navbar = ({ size }) => {
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
  return (
    <Grid sx={{ py: "4px", px: isSmall ? "12px" : "24px", ...positionStyles }}>
      <div
        className={`navbar-list flex justify-between relative ${isSmall ? "" : "pt-8"}`}
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
      </div>
    </Grid>
  );
};

export default Navbar;
