import React from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";
import { Button, Typography ,Box,Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Event =({EventData, EventTitle})=>{
  const EventImage = EventData.image;
  const EventTime = EventData.time;
  const EventDesciption = EventData.description;
  const EventHost = EventData.host;
  const EventOccupancy = EventData.occupancy;
  return(
    <LayoutWithSidebar>
      <div>
      <div style={{ fontSize: '48px', fontWeight: 'bolder' }}>
  <span>{EventTitle}</span>
</div>
        <Box
        sx={{
          backgroundColor: "skyblue",
          height: '20vh', // 높이를 화면의 50%로 설정 혹은 다른 값으로 조절
          width: '30%', // 가로 크기를 100%로 설정
          backgroundImage: `url(${`/images/${EventImage}`})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}/>
        <div className="EventText" style={{fontSize:'8px',whiteSpace:"pre-line"}}>
        <h1 style={{fontWeight:'bold'}}>Date & Time:{EventTime}</h1>
        <h1>{EventDesciption}</h1>
        <h1>{EventHost}</h1>
        <h1>{EventOccupancy}</h1>
        </div>
        </div>
        <div>
        <Box maxWidth="30%">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Link to="/chat">
            <Button variant="contained" color="primary" fullWidth>
              Message Host
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/yourevents">
            <Button variant="contained" color="primary" fullWidth>
              Join Event
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
        </div>
    </LayoutWithSidebar>
  );
};
export default Event;