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
import HolidayQuiz from "./Pages/Trivia/HolidayQuiz";
import KpopQuiz from "./Pages/Trivia/KpopQuiz";
import CommonPhraseQuiz from "./Pages/Trivia/CommonPhraseQuiz";
import EtiquetteQuiz from "./Pages/Trivia/EtiquetteQuiz";
import Logout from "./Pages/Logout";
import Bibimbap from "./Pages/EventPage/bibimbap";
import KoreanBath from "./Pages/EventPage/KoreanBath";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import YourEvents from "./Pages/YourEvents";
import Baseball from "./Pages/EventPage/Baseball";
import Chatroom from "./Pages/Chatroom";

const App = () => {
  const [user, setUser] = React.useState(null);
  const [currentChat, setCurrentChat] = useState(null);

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
        <Route path="/yourevents" element={<YourEvents user={user} />} />
        <Route path="/explore" element={<Explore user={user} />} />
        <Route
          path="/messages"
          element={<Messages user={user} setCurrentChat={setCurrentChat} />}
        />
        <Route
          path="/chatroom"
          element={<Chatroom user={user} currentChat={currentChat} />}
        />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/triviafood" element={<FoodQuiz />} />
        <Route path="/triviauniversity" element={<UniversityQuiz />} />
        <Route path="/triviapalace" element={<PalaceQuiz />} />
        <Route path="/triviaholiday" element={<HolidayQuiz />} />
        <Route path="/triviaetiquette" element={<EtiquetteQuiz />} />
        <Route path="/triviakpop" element={<KpopQuiz />} />
        <Route path="/triviacommonphrase" element={<CommonPhraseQuiz />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
        <Route path="/EventPagebibimbap" element={<Bibimbap />} />
        <Route path="/EventPageKoreanBath" element={<KoreanBath />} />
        <Route path="/EventPageBaseball" element={<Baseball />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
