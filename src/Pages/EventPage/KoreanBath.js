import React from "react";
import Event from "./Event";
import { useLocation } from "react-router-dom";

const KoreanBath = () => {
  const KoreanBathEventData = {
    image: "KoreanBath.jpg",
    time: "26 Oct 12:00 - 26 Oct 24:00",
    description:
      "Take a bath and drinking banana milk is somewhat fantastic!!\n Let's go to korean bathhouse and clean our tired body and mental\n Come on Guys!",
    host: "Hosted Kim Min Ju 4.82",
    occupancy: "Current Occupancy 3/5",
  };
  return (
    <Event
      EventData={KoreanBathEventData}
      EventTitle="Visit a Korean BathHouse"
    />
  );
};
export default KoreanBath;
