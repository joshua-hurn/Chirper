import React from "react";
import Chirp from "./Chirp";

const Timeline = (props) => {
  return props.chirps.map((chirp, index) => {
    return <Chirp key={`chirp-${index}`} text={chirp.text} />
  })
};

export default Timeline;
