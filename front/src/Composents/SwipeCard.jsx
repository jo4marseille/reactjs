import React from 'react';
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { People } from "./Users";

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 19rem;
  width: 300px;
  height: 300px;
  background-size: cover;
`;

const SwipeCard = () => {

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
      };
    
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + " left the screen");
      };
      
   

  return (
    <CardDiv>
        {People.map((person, index) => {
        return (
          <TinderCard
            key={index}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <ImgDiv
              style={{ backgroundImage: `url(${person.image})` }}
              bg={person.image}
            >
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "0px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {person.name}
              </h1>
            </ImgDiv>
          </TinderCard>
        );
      })}
    </CardDiv>
  )
}

export default SwipeCard
