import React, { useState } from "react";
import { createUser } from "../firebase/authService";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLocal, setIsLocal] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      createUser(email, password);
      const user = auth.currentUser;
      props.setUser(user.uid);
      // add to firestore

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        isLocal: isLocal,
        coins: 0,
        interests: [],
        languages: [],
        wantedLanguages: [],
      });

      navigate("/events");
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
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
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
      <FormControl fullWidth margin="normal">
        <InputLabel id="user-type-label">User Type</InputLabel>
        <Select
          labelId="user-type-label"
          id="user-type-select"
          value={isLocal ? "local" : "global"}
          label="User Type"
          onChange={(e) => setIsLocal(e.target.value === "local")}
          required
        >
          <MenuItem value="local">Local Student</MenuItem>
          <MenuItem value="global">Global Student</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
