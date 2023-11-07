import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default MainPage;
