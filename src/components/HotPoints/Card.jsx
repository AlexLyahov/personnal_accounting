import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  background-color: black;
  margin-bottom: 100px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover{
        transform: scale(1.03);
    }
`;
const CardImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 75%;
  transition: height 300ms ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  color: white;
  h4 {
    font-size: 20px;
    margin: 10px 0;
    color: #FFC700;
    font-weight: 400;
  }
  span{
    font-size: 16px;
    font-weight: 300;
  }
`;
const TitleText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const Card = ({ data }) => {
  return (
    <CardContainer>
      <CardImg>
        <img src={data.IMG} alt="" />
      </CardImg>
      <CardBottom>
        <TitleText>
            <h4>{data.title}</h4>
            <span>{data.date}</span>
        </TitleText>
        <span>{data.description}</span>
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
