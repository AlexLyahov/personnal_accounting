import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/hotPoint.png";

const MainTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.5);
  h2 {
    color: #FFC700;
    text-shadow: 0px 4px 4px #000;
    font-size: 96px;
    font-weight: 600;
    margin: 0;
  }
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
  background: url(${bgIMG}), lightgray 50% / cover no-repeat;
  width: 100%;
  margin-bottom: 100px;
`;
const HotPointsTitle = () => {
  return (
    <MainContainer id="hotspots">
      <MainTextContainer>
        <h2>Гарячі Точки</h2>
      </MainTextContainer>
    </MainContainer>
  );
};

export default HotPointsTitle;