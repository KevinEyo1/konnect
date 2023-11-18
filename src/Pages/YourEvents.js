import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const YourEvents = () => {
  const [events, setEvents] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const list = [];
    const querySnapshot = await getDoc(doc(db, "users", user.uid));
    const eventsData = querySnapshot.data().events;
    list.push(...eventsData);
    setEvents(list);
  };

  const navigateToEvent = (EventPath) => {
    navigate(`/EventPage${EventPath}`);
  };

  return (
    <LayoutWithSidebar>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Your Events
        </Typography>
        {events.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mt={5}
          >
            <Typography>
              Looks like you haven't joined any events yet. Check out the Events
              tab to find something interesting!
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => navigateToEvent(event.path)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={event.image}
                      alt={event.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.host} {event.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.time}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.occupancy}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </LayoutWithSidebar>
  );
};

export default YourEvents;
