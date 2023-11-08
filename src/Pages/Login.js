import React, { useState } from "react";
import { signInUser } from "../firebase/authService";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      signInUser(email, password);
      props.setUser(auth.currentUser.uid);
      navigate("/events");
      // Sign-in successful
    } catch (error) {
      // Handle sign-in errors here
      console.error("Error during the sign-in process", error);
    }
  };

  console.log("SignIn component is being rendered");

  return (
    <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6">Log In</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Log In
      </Button>
    </Box>
  );
};

export default Login;
