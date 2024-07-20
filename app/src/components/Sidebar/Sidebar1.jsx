// import React, { useState } from "react";
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import Dashboard from '@mui/icons-material/Dashboard';
// import Image from '@mui/icons-material/Image';
// import TextFields from '@mui/icons-material/TextFields';
// import Person from '@mui/icons-material/Person';
// import Settings from '@mui/icons-material/Settings';
// import ExitToApp from '@mui/icons-material/ExitToApp';
// import MailOutline from '@mui/icons-material/MailOutline';
// import BarChart from '@mui/icons-material/BarChart';
// import FileCopy from '@mui/icons-material/FileCopy';
// import Place from '@mui/icons-material/Place';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


// const Sidebar1 = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setSubmenuOpen] = useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(!open);
//   };

//   const handleSubmenuToggle = () => {
//     setSubmenuOpen(!submenuOpen);
//   };

//   const Menus = [
//     { title: "Dashboard", icon: <Dashboard /> },
//     { title: "Pages", spacing: true, icon: <FileCopy />, submenu: true, submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }, { title: "Submenu 3" }] },
//     { title: "Media", icon: <Image /> },
//     { title: "Projects", icon: <TextFields /> },
    
//   ];

//   return (
//     <Drawer 
//       variant="persistent" 
//       anchor="left"
//       open={open}
//       sx={{ width: open ? 240 : 70, 
//             flexShrink: 0, 
//             '& .MuiDrawer-paper': { width: open ? 240 : 170, transition: 'width 0.3s ease' } 
            
//           }}
    
//       >
//       <IconButton onClick={handleDrawerOpen}>
//         {open ? <ChevronLeftIcon /> : <ExpandMore />}
//       </IconButton>

//       <List>
//         {Menus.map((menu, index) => (
//           <React.Fragment key={index}>
//             <ListItem button onClick={menu.submenu ? handleSubmenuToggle : null}>
//               <ListItemIcon>{menu.icon}</ListItemIcon>
//               <ListItemText primary={menu.title} />
//               {menu.submenu ? submenuOpen ? <ExpandLess /> : <ExpandMore /> : null}
//             </ListItem>
//             {menu.submenu ? (
//               <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {menu.submenuItems.map((submenuItem, submenuIndex) => (
//                     <ListItem button key={submenuIndex}>
//                       <ListItemText inset primary={submenuItem.title} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             ) : null}
//           </React.Fragment>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar1;

// import * as React from 'react';
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
    navigate('/auth'); // Assuming you're using react-router-dom for navigation
  };
  
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
          {['Dashboard', 'My DashOff', 'Option', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  '.MuiListItemIcon-root, .MuiListItemText-primary': {
                    color: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
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