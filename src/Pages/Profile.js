import React from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { Typography } from "@mui/material";

const Profile = () => {
  const user = auth.currentUser.uid;
  const [userInfo, setUserInfo] = useState({});
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [coins, setCoins] = React.useState(0);
  const [isNative, setNative] = React.useState("");
  const [interest, setInterest] = React.useState([]);
  const [language, setLanguage] = React.useState([]);
  const [wantedLanguage, setWantedLanguage] = React.useState([]);

  useEffect(() => {
    getCurrentUser().then(() => {
      console.log("user got", userInfo);
    });
  }, []);

  const getCurrentUser = async () => {
    const docRef = doc(db, "users", user);
    console.log(user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
      setUsername(docSnap.data().username);
      setEmail(docSnap.data().email);
      setCoins(docSnap.data().coins);
      if (docSnap.data().isNative) {
        setNative("Local student");
      } else {
        setNative("International student");
      }
      setInterest(docSnap.data().interests);
      setLanguage(docSnap.data().languages);
      setWantedLanguage(docSnap.data().wantedLanguages);
    } else {
      console.log("No such document!");
    }
  };

  const handleSaveChanges = async () => {
    const docRef = doc(db, "users", user);
    await updateDoc(docRef, {
      interests: interest,
      languages: language,
      wantedLanguages: wantedLanguage,
    });
    console.log("Profile updated!");
    alert("Profile updated!");
  };

  const handleChangeInterest = (event) => {
    const {
      target: { value },
    } = event;
    setInterest(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeLanguage = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeWantedLanguage = (event) => {
    const {
      target: { value },
    } = event;
    setWantedLanguage(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <LayoutWithSidebar>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr",
            gridRowGap: "10px",
          }}
        >
          {/* <div>
            <label>Coins:</label>
            <div>{coinValue}</div>
          </div> */}
          <div>
            <Typography variant="h6">Username: {username}</Typography>
          </div>
          <div>
            <Typography variant="h6">Email: {email}</Typography>
          </div>
          <div>
            <Typography variant="h6">Student type: {isNative}</Typography>
          </div>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="interest-select-label">Interest</InputLabel>
              <Select
                labelId="interest-select-label"
                id="interest-select"
                multiple
                value={interest}
                onChange={handleChangeInterest}
              >
                <MenuItem value={"Soccer"}>Soccer</MenuItem>
                <MenuItem value={"Travel"}>Travel</MenuItem>
                <MenuItem value={"Reading"}>Reading</MenuItem>
                <MenuItem value={"Cooking"}>Cooking</MenuItem>
                <MenuItem value={"Gaming"}>Gaming</MenuItem>
                <MenuItem value={"Hiking"}>Hiking</MenuItem>
                <MenuItem value={"Swimming"}>Swimming</MenuItem>
                <MenuItem value={"Kpop"}>Kpop</MenuItem>
                <MenuItem value={"Kdrama"}>Kdrama</MenuItem>
                <MenuItem value={"Anime"}>Anime</MenuItem>
                <MenuItem value={"Manga"}>Manga</MenuItem>
                <MenuItem value={"Dancing"}>Dancing</MenuItem>
                <MenuItem value={"Karaoke"}>Karaoke</MenuItem>
                <MenuItem value={"Movies"}>Movies</MenuItem>
                <MenuItem value={"Music"}>Music</MenuItem>
                <MenuItem value={"Photography"}>Photography</MenuItem>
                {/* ... other options */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="language-select-label">
                Languages Known
              </InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                multiple
                value={language}
                onChange={handleChangeLanguage}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Korean"}>Korean</MenuItem>
                <MenuItem value={"Chinese"}>Chinese</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                <MenuItem value={"German"}>German</MenuItem>
                <MenuItem value={"Russian"}>Russian</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
                <MenuItem value={"Arabic"}>Arabic</MenuItem>
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="wanted-language-select-label">
                Languages Wanted
              </InputLabel>
              <Select
                labelId="wanted-language-select-label"
                id="wanted-language-select"
                multiple
                value={wantedLanguage}
                onChange={handleChangeWantedLanguage}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Korean"}>Korean</MenuItem>
                <MenuItem value={"Chinese"}>Chinese</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                <MenuItem value={"German"}>German</MenuItem>
                <MenuItem value={"Russian"}>Russian</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
                <MenuItem value={"Arabic"}>Arabic</MenuItem>
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button variant="outlined" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
    </LayoutWithSidebar>
  );
};

export default Profile;
