import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;

  &:hover {
    .card-img {
      height: 100%;
    }
    .card-about, .card-creator {
      opacity: 0;
      visibility: hidden;
    }
    .card-title{
        flex-shrink: 0;
        background: rgba(0, 0, 0, 0.6);
        padding: 10px;
    }
  }
`;

const Card = styled.div`
  align-self: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  span{
    color: #FF0000;
    border: 2px solid red;
    border-radius: 5px;
    padding: 3px 20px;
    font-weight: 500;
  }
`;

const CardImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;
  transition: height 300ms ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  transition: all 300ms ease-in-out;
`;

const CardTitle = styled.h3`
  transition: all 300ms ease-in-out;
  font-weight: 500;
`;

const NewsCard = ({ data }) => {
  return (
    <CardContainer>
      <Card>
        <CardImg className="card-img">
          <a href="/" className="card-link">
            <img src={data.IMG} alt="Boom" />
          </a>
        </CardImg>
        <CardInfo className="card-info">
          <div className="card-about">
            <span style={{color: data.Color, border: `2px solid ${data.Color}`}}>{data.text}</span>
          </div>
          <CardTitle className="card-title">
            {data.title}
          </CardTitle>
          <div className="card-creator">
            by Kraken #3
          </div>
        </CardInfo>
      </Card>
    </CardContainer>
  );
};

export default NewsCard;
