import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/mainPhoto.png";

const TitleText = styled.div`
  display: flex;
    width: 100%;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.6);
  h1 {
    color: #FFC700;
    text-shadow: 0px 4px 4px #000;
    font-size: 96px;
    font-weight: 500;
    padding-left: 10%;
    margin: 0;
  }
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background: url(${bgIMG}), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 750px;
`;
const Main = () => {
  return (
    <MainContainer>
      <TitleText>
        <h1>KRAKEN</h1>
      </TitleText>
    </MainContainer>
  );
};

export default Main;
