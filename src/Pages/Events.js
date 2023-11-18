import React from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const Events = () => {
  const navigate = useNavigate();

  const navigateToEvent = (EventPath) => {
    navigate(`/EventPage${EventPath}`);
  };

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

  return (
    <LayoutWithSidebar>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Events Page
        </Typography>
        <Grid container spacing={3}>
          {eventsData.map((event, index) => (
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
      </Box>
    </LayoutWithSidebar>
  );
};

export default Events;
