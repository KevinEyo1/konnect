import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MainPage from "./Pages/MainPage";
import Events from "./Pages/Events";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Trivia from "./Pages/Trivia/Trivia";
import FoodQuiz from "./Pages/Trivia/FoodQuiz";
import UniversityQuiz from "./Pages/Trivia/UniversityQuiz";
import PalaceQuiz from "./Pages/Trivia/PalaceQuiz";
import Logout from "./Pages/Logout";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in with uid:", user.uid);
        setUser(user.uid);
      } else {
        // User is signed out
        console.log("User is signed out");
        // Handle signed out state or redirect to login page
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/events" element={<Events user={user} />} />
        <Route path="/explore" element={<Explore user={user} />} />
        <Route path="/messages" element={<Messages user={user} />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/triviafood" element={<FoodQuiz />} />
        <Route path="/triviauniversity" element={<UniversityQuiz />} />
        <Route path="/triviapalace" element={<PalaceQuiz />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
