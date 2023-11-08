import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

const LayoutWithSidebar = ({ children }) => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = React.useState("/events");

  const menuItems = [
    {
      text: "Profile",
      icon: <PermIdentityOutlinedIcon color="primary" />,
      path: "/profile",
    },
    {
      text: "Events",
      icon: <EventOutlinedIcon color="primary" />,
      path: "/events",
    },
    {
      text: "Explore",
      icon: <ExploreOutlinedIcon color="primary" />,
      path: "/explore",
    },
    {
      text: "Messages",
      icon: <MessageOutlinedIcon color="primary" />,
      path: "/messages",
    },
    {
      text: "Trivia",
      icon: <QuizOutlinedIcon color="primary" />,
      path: "/trivia",
    },
    {
      text: "Logout",
      icon: <LogoutOutlinedIcon color="primary" />,
      path: "/logout",
    },
    // ... other items
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              selected={selectedPage === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayoutWithSidebar;
