import React from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Profile = () => {
  const [interest, setInterest] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [isNative, setNative] = React.useState('');
  const [wantedLanguage, setWantedLanguage] = React.useState('');

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleNativeChange = (event) => {
    setNative(event.target.value);
  };

  const handleWantedLanguageChange = (event) => {
    setWantedLanguage(event.target.value);
  };
  const coinValue = 100;
  const name = "Jun yeong Hwang";



  return (
    <LayoutWithSidebar>
       <div>
      <h1>Profile Page</h1>
      {/* Rest of your home page content */}
      <div style={{ display: 'grid', gridTemplateColumns: '5fr', gridRowGap: '10px' }}>
      
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Interest</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={interest}
              label="Interest"
              onChange={handleChange}
            >
              <MenuItem value={"Soccer"}>Soccer</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"Reading book"}>Reading book</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label="Language"
              onChange={handleLanguageChange}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Korean"}>Korean</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="native-select-label">IsNative</InputLabel>
            <Select
              labelId="native-select-label"
              id="native-select"
              value={isNative}
              label="IsNative"
              onChange={handleNativeChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="wantedLanguage-select-label">Wanted Language</InputLabel>
            <Select
              labelId="wantedLanguage-select-label"
              id="wantedLanguage-select"
              value={wantedLanguage}
              label="WantedLanguage"
              onChange={handleWantedLanguageChange}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Korean"}>Korean</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
      <label>Coin Value:</label>
        <div>{coinValue}</div>
    </div>
    <div>
      <label>Name:</label>
        <div>{name}</div>
    </div>
      </div>
      <Button variant="outlined">Save Changes</Button>
    </div>
  
    </LayoutWithSidebar>
  );
};


export default Profile;
