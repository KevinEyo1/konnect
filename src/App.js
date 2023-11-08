import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MainPage from "./Pages/MainPage";
import Events from "./Pages/Events";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Trivia from "./Pages/Trivia";
import Logout from "./Pages/Logout";

const App = () => {
  const [user, setUser] = React.useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
