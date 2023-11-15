import React from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { useNavigate } from "react-router";
import styled from "styled-components"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EventItem from '../Pages/Events'


const YourEvents = (props) => {
  const EventData = props;
  const EventImage = EventData.image;
  const EventTime = EventData.time;
  const EventDesciption = EventData.description;
  const EventHost = EventData.host;
  const EventOccupancy = EventData.occupancy;
  const EventTitle = props.title;
  const Eventlink = props.link

  const navigate = useNavigate();

  const navigateToEvent = (EventPath) => {
    navigate(`/EventPage${EventPath}`);
  };
  return (
    <LayoutWithSidebar>
       <li>
          <Container maxWidth="50">
            
          <EventItem onClick={()=>navigateToEvent({Eventlink})}>
          <Box
        sx={{
          backgroundColor: "skyblue",
          height: '20vh', // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
          width: '30%', // 가로 크기를 100%로 설정
          backgroundImage: `url(${EventImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
            <p className="Event-title">{EventTitle}</p>
            <div className = "Event-info">
              <span className= "Host-name">{EventHost} </span>
              </div>
            <div className="Event-time">
              <span>{EventTime} </span>
            </div>
            <div className = "Event-occupancy">
              <span>{EventOccupancy}</span>
            </div>
            </EventItem>
            
            </Container>
        </li>
    </LayoutWithSidebar>
  );
};

export default YourEvents;
