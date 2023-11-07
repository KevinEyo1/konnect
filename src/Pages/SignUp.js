import React, { useState } from "react";
import { createUser } from "../firebase/authService";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await createUser(email, password);
      props.setUser(user);
      // Sign-up successful
    } catch (error) {
      // Handle sign-up errors here
      console.error("Error during the sign-up process", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6">Sign Up</Typography>
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
