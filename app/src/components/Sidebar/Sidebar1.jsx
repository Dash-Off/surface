
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout'; // Import Logout icon
import { useNavigate } from "react-router-dom";
import * as api from '../../utils/api';



const drawerWidth = 240;
const collapsedDrawerWidth = 60; 

export default function PermanentDrawerLeft() {

  const [open, setOpen] = useState(true);

  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Logout function
  const handleLogout = () => {
    // Perform logout operations here
    console.log('Logging out...'); // Placeholder for actual logout logic
    // For example, clear user data from local storage and redirect to login page
    localStorage.removeItem('username');
    const cb = () =>
    window.location.href = '/auth'; // Assuming you're using react-router-dom for navigation
    api.logout(cb);
  };

  const handleMyDashOff = () => {
    navigate('/my-dashoff'); // Assuming you're using react-router-dom for navigation
  };

  const handleDashboard= () => {
    navigate('/dashboard1'); // Assuming you're using react-router-dom for navigation
  };

  const handleProfile= () => {
    navigate('/my-profile'); // Assuming you're using react-router-dom for navigation
  };


  // Define your onClick functions for each list item
  const handleClicks = {
    'Dashboard': handleDashboard,
    'My DashOff': handleMyDashOff,
    'Profile': handleProfile,
  };

  const keysList = Object.keys(handleClicks);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: open ? drawerWidth : collapsedDrawerWidth,
          transition: 'width 0.3s ease',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedDrawerWidth,
            boxSizing: 'border-box',
            transition: 'width 0.3s ease',
            background: 'linear-gradient(135deg, rgba(51, 14, 98, 0.5), rgba(26, 8, 59, 0.5))',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: 'rgba(255, 255, 255, 0.9)', // Bright white with slight transparency
              '&:hover': {
                color: 'rgba(255, 255, 0, 0.9)', // Vibrant yellow on hover, adjust as needed
              },
            }}        
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {keysList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  '.MuiListItemIcon-root, .MuiListItemText-primary': {
                    color: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                onClick={handleClicks[text]}
              >
                <ListItemIcon
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)', // Bright white with slight transparency
                    '&:hover': {
                      color: 'rgba(255, 255, 0, 0.9)', // Vibrant yellow on hover, adjust as needed
                    },
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} /> {/* This box will take up the remaining space */}
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                '.MuiListItemIcon-root, .MuiListItemText-primary': {
                  color: 'rgba(255, 255, 255, 0.9)',
                },
              }}
              onClick={handleLogout}
            >
              <ListItemIcon
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}