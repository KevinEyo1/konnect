import React from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const Event = ({ EventData, EventTitle }) => {
  const EventImage = EventData.image;
  const EventTime = EventData.time;
  const EventDesciption = EventData.description;
  const EventHost = EventData.host;
  const EventOccupancy = EventData.occupancy;
  const user = auth.currentUser;

  const navigate = useNavigate();

  const handleJoinEvent = async (event, title) => {
    const dataToStore = {
      title: title,
      eventData: event,
    };
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
      <div>
        <div style={{ fontSize: "48px", fontWeight: "bolder" }}>
          <span>{EventTitle}</span>
        </div>
        <Box
          sx={{
            backgroundColor: "skyblue",
            height: "20vh", // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
            width: "30%", // 가로 크기를 100%로 설정
            backgroundImage: `url(${`/images/${EventImage}`})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="EventText"
          style={{ fontSize: "8px", whiteSpace: "pre-line" }}
        >
          <h1 style={{ fontWeight: "bold" }}>Date & Time:{EventTime}</h1>
          <h1>{EventDesciption}</h1>
          <h1>{EventHost}</h1>
          <h1>{EventOccupancy}</h1>
        </div>
      </div>
      <div>
        <Box maxWidth="30%">
          <Grid container spacing={2} alignItems="center">
            {/* <Grid item xs={6}> */}
            {/* <Link to="/chat">
            <Button variant="contained" color="primary" fullWidth>
              Message Host
            </Button>
          </Link> */}
            {/* </Grid> */}
            <Grid item xs={6}>
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
      </div>
    </LayoutWithSidebar>
  );
};
export default Event;
