import React from "react";
import Event from "./Event";

const bibimbap = () => {
  const bibimbapEventData = {
    image: "bibimbap.jpg",
    time: "17 Oct 17:00 - 17 Oct 19:00",
    description:
      "Join this event to experience the art of making Bibimbap,\na delicious and easy-to-cook Korean traditional dish.\nImmerse yourself in the process of creating this flavorful dish\nand savor the joy of enjoying it afterward.",

    host: "Hosted by Jun Yeong Hwang 4.69",
    occupancy: "Current Occupancy 4/5",
  };
  return <Event EventData={bibimbapEventData} EventTitle="Bibimbap cooking" />;
};
export default bibimbap;
