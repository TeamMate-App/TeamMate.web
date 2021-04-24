/* import React, { useState } from "react"; */
import Event from "./Event";
import "./Events.css";

const Events = ({ events }) => {
  console.log(events);
  console.log(events.length > 0);

  return (
    <>
      {events.length > 0 ? (
        events.map((eve) => <Event {...eve} key={eve.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Events;
