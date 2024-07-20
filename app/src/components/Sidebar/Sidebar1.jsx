import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Dashboard from '@mui/icons-material/Dashboard';
import Image from '@mui/icons-material/Image';
import TextFields from '@mui/icons-material/TextFields';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import ExitToApp from '@mui/icons-material/ExitToApp';
import MailOutline from '@mui/icons-material/MailOutline';
import BarChart from '@mui/icons-material/BarChart';
import FileCopy from '@mui/icons-material/FileCopy';
import Place from '@mui/icons-material/Place';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const Sidebar1 = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const Menus = [
    { title: "Dashboard", icon: <Dashboard /> },
    { title: "Pages", spacing: true, icon: <FileCopy />, submenu: true, submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }, { title: "Submenu 3" }] },
    { title: "Media", icon: <Image /> },
    { title: "Projects", icon: <TextFields /> },
    
  ];

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <IconButton onClick={handleDrawerOpen}>
        {open ? <ChevronLeftIcon /> : <ExpandMore />}
      </IconButton>
      <List>
        {Menus.map((menu, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={menu.submenu ? handleSubmenuToggle : null}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
              {menu.submenu ? submenuOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
            {menu.submenu ? (
              <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.submenuItems.map((submenuItem, submenuIndex) => (
                    <ListItem button key={submenuIndex}>
                      <ListItemText inset primary={submenuItem.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar1;