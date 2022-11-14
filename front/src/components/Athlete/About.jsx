import React from "react";
import Navigation from "../Navigation";

const About = (props) => {
  return (
    <div>
      {props.dataSponsor.name}
      {props.dataSponsor.about}
    </div>

  )
}
export default About
