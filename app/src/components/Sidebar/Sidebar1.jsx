import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Tooltip } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Article from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout"; // Import Logout icon
import { useNavigate } from "react-router-dom";
import * as api from "../../utils/api";

export default function PermanentDrawerLeft({ open, close }) {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    const cb = () => (window.location.href = "/auth");
    api.logout(cb);
  };

  const handleMyDashOff = () => {
    navigate("/my-dashoffs");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const navItems = {
    Dashboard: { handler: handleDashboard, icon: Home },
    "My DashOffs": { handler: handleMyDashOff, icon: Article },
  };

  const keysList = Object.keys(navItems);

  return (
    <Drawer
      open={open}
      onClose={close}
      sx={{
        width: "60px",
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          width: "60px",
          boxSizing: "border-box",
          transition: "width 0.3s ease",
          background: "#4544447d",
          py: "20px",
          zIndex: "999",
          height: "330px",
          top: "15vh",
        },
      }}
      anchor="right"
    >
      <List>
        {keysList.map((key, index) => {
          const Icon = navItems[key]["icon"];
          return (
            <ListItem key={key} sx={{ py: "12px" }} disablePadding>
              <ListItemButton
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  ".MuiListItemIcon-root, .MuiListItemText-primary": {
                    color: "rgba(255, 255, 255, 0.9)",
                  },
                }}
                onClick={navItems[key]["handler"]}
              >
                <Tooltip title={key} arrow placement="right">
                  <ListItemIcon
                    sx={{
                      color: "#787887",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {<Icon />}
                  </ListItemIcon>
                </Tooltip>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              ".MuiListItemIcon-root, .MuiListItemText-primary": {
                color: "rgba(255, 255, 255, 0.9)",
              },
            }}
            onClick={handleLogout}
          >
            <Tooltip title="Logout" arrow placement="right">
              <ListItemIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
            </Tooltip>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
