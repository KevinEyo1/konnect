import React from "react";
import Event from "./Event";

const Baseball = () => {
  const baseballEventData = {
    image: "Baseball.jpg",
    time: "26 Oct 12:00 - 26 Oct 24:00",
    description:
      "HanHwa is really strong baseball team in the world, \nLet's watch final world baseball championship together !! \nFeel free to enjoy !! Let's go Hanhwa ",
    host: "Hosted by Kevin 4.51",
    occupancy: "Current Occupancy 2/5",
  };
  return (
    <Event
      EventData={baseballEventData}
      EventTitle="Go to see baseball in Daejeon"
    />
  );
};
export default Baseball;
