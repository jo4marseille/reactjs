import React from "react";
import styled from "styled-components";


const HeaderWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

const HeaderSwipeCard = () => {
  return (
    <HeaderWrapper>
      <h1 className="mx-auto text-3xl font-bold mt-8">Olympic Buddies</h1>
    </HeaderWrapper>
  );
};
export default HeaderSwipeCard;