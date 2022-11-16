import React from "react";
import styled from "styled-components";
import croixNoir from '../assets/img/croixBlack.png';
import coeurNoir from '../assets/img/coeurNoir.png';


const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;
const FooterWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

const FooterSwipeCard = () => {

  return (
    <FooterWrapper style={{ marginTop: "19rem"}}>
        <ICON className="mt-3"><img src={croixNoir} alt="picto_croix" /></ICON>
        <ICON className="ml-40 mt-3"><img src={coeurNoir} alt="picto_coeur" /></ICON>
    </FooterWrapper>
  );
};
export default FooterSwipeCard;