import React from "react";
import Header from "../../../Components/Header/header";

function About(props) {
  return (
    <div>
      <Header tenname={props.name}></Header>
      <div>
        <h1>Ve chung toi</h1>
      </div>
    </div>
  );
}

export default About;
