import React from "react";
import LayoutWithSidebar from "../components/LayoutWithSidebar";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Events = () => {
  const navigate = useNavigate();

  const navigateToEvent = (EventPath) => {
    navigate(`/EventPage${EventPath}`, { state: { isJoinableButton: true } });
  };
  const EventList = styled.ul`
    list-style: none;
    padding: 0;
  `;
  const EventItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: clearInterval;
    cursor: PointerEvent;
    padding: 10;
    img {
      width: 150px; /* Adjusted image size */
      height: 150px; /* Adjusted image size */
      object-fit: cover;
      border-radius: 8px;
    }

    .Host-name {
      font-size: 16px;
      font-weight: bold;
    }

    .Event-info {
      font-size: 16px;
      font-weight: bold;
    }
    .Event-time {
      font-size: 16px;
      font-weight: bold;
    }
    .Event-occupancy {
      font-size: 16px;
      font-weight: bold;
    }
    .Event-title {
      font-size: 24px;
      font-weight: bold;
    }
    .space {
      margin: 10px;
    }
  `;

  return (
    <LayoutWithSidebar>
      <EventList>
        <h1>Events Page</h1>
        <li>
          <Container maxWidth="50">
            <EventItem onClick={() => navigateToEvent("bibimbap")}>
              <Box
                sx={{
                  backgroundColor: "skyblue",
                  height: "20vh", // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
                  width: "30%", // 가로 크기를 100%로 설정
                  backgroundImage: `url(${"/images/bibimbap.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="Event-title">Bibimbap Cooking</p>
              <div className="Event-info">
                <span className="Host-name">
                  Hosted by Jun Yeong Hwang 4.69{" "}
                </span>
              </div>
              <div className="Event-time">
                <span>17 Oct 17:00 - 17 Oct 19:00 </span>
              </div>
              <div className="Event-occupancy">
                <span>Current Occupancy 4/5</span>
              </div>
            </EventItem>
          </Container>
        </li>

        <li>
          <div className="space"></div>
          <Container maxWidth="50">
            <EventItem onClick={() => navigateToEvent("KoreanBath")}>
              <Box
                sx={{
                  backgroundColor: "skyblue",
                  height: "20vh", // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
                  width: "30%", // 가로 크기를 100%로 설정
                  backgroundImage: `url(${"/images/koreanBath.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="Event-title">Visit a Korean BathHouse</p>
              <div className="Event-info">
                <span className="Host-name">Hosted by Kim Min Ju 4.82 </span>
              </div>
              <div className="Event-time">
                <span>26 Oct 12:00 - 26 Oct 24:00 </span>
              </div>
              <div className="Event-occupancy">
                <span>Current Occupancy 3/5</span>
              </div>
            </EventItem>
          </Container>
        </li>

        <li>
          <div className="space"> </div>
          <Container maxWidth="50">
            <EventItem onClick={() => navigateToEvent("Baseball")}>
              <Box
                sx={{
                  backgroundColor: "skyblue",
                  height: "20vh", // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
                  width: "30%", // 가로 크기를 100%로 설정
                  backgroundImage: `url(${"/images/baseball.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="Event-title">Go to see Baseball in Daejeon</p>
              <div className="Event-info">
                <span className="Host-name">Hosted by Kevin 4.51 </span>
              </div>
              <div className="Event-time">
                <span>20 Nov 17:00 - 20 Nov 20:00 </span>
              </div>
              <div className="Event-occupancy">
                <span>Current Occupancy 2/5</span>
              </div>
            </EventItem>
          </Container>
        </li>
      </EventList>
    </LayoutWithSidebar>
  );
};

export default Events;
