import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { signOutUser } from "../firebase/authService";

const Logout = (props) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOutUser();
    props.setUser(null);
    navigate("/"); // Navigate to the main page after signing out
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Are you sure you want to log out?
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        Log Out
      </Button>
    </Box>
  );
};

export default Logout;
