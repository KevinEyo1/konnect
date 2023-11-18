import React from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Event = ({ EventData, EventTitle }) => {
  const EventImage = `/images/${EventData.image}`;
  const user = auth.currentUser;
  const navigate = useNavigate();

  const eventsData = [
    {
      path: "bibimbap",
      title: "Bibimbap cooking",
      host: "Hosted by Jun Yeong Hwang",
      rating: "4.69 stars",
      time: "17 Oct 17:00 - 17 Oct 19:00",
      occupancy: "Current Occupancy 4/5",
      image: "/images/bibimbap.jpg",
    },
    {
      path: "KoreanBath",
      title: "Visit a Korean BathHouse",
      host: "Hosted by Kim Min Ju",
      rating: "4.82 stars",
      time: "26 Oct 12:00 - 26 Oct 24:00",
      occupancy: "Current Occupancy 3/5",
      image: "/images/koreanBath.jpg",
    },
    {
      path: "Baseball",
      title: "Go to see baseball in Daejeon",
      host: "Hosted by Kevin",
      rating: "4.51 stars",
      time: "20 Nov 17:00 - 20 Nov 20:00",
      occupancy: "Current Occupancy 2/5",
      image: "/images/baseball.jpg",
    },
  ];

  const handleJoinEvent = async (event, title) => {
    var dataToStore = {};
    console.log(title);
    if (title === "Bibimbap cooking") {
      dataToStore = eventsData[0];
    } else if (title === "Visit a Korean BathHouse") {
      dataToStore = eventsData[1];
    } else {
      dataToStore = eventsData[2];
    }
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const existingEvents = docSnap.data().events;
      const isEventJoined = existingEvents.some((e) => e.title === title);
      if (isEventJoined) {
        alert("You have already joined this event!");
      } else {
        const updatedEvents = [...existingEvents, dataToStore];
        await updateDoc(docRef, { events: updatedEvents });
        alert("Event Joined!");
      }
    } else {
      console.log("No such document!");
    }
  };

  return (
    <LayoutWithSidebar>
      <Card sx={{ maxWidth: 800, m: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={EventImage}
          alt={EventTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {EventTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date & Time: {EventData.time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {EventData.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Host: {EventData.host}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Occupancy: {EventData.occupancy}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleJoinEvent(EventData, EventTitle)}
              >
                Join Event
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </LayoutWithSidebar>
  );
};

export default Event;
