import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import kharkovIMG from "../../assets/Kharkov.png";
import vilhivkaIMG from "../../assets/vilhivka.jpg";
import killDiverseIMG from "../../assets/killDiverse.jpg";
import siverskIMG from "../../assets/siversk.png";
import boomIMG from "../../assets/boom.jpg";
import generalIMG from "../../assets/general.jpg";
import izumIMG from "../../assets/Izum.jpg";
import flyBoomIMG from "../../assets/flyBoom.png";
import bulletIMG from "../../assets/bullet.jpg";

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h2 {
    margin-top: 50px;
    display: flex;
    width: 75%;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const CardContainerTop = styled.div`
  display: flex;
  text-align: start;
  border-bottom: 2px solid black;
  margin: 60px 10px;
  h3 {
    font-size: 24px;
    margin: 0;
    padding-left: 3%;
  }
`;
const CardContainerBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;
const NewsStructure = () => {
  const dataInfoCard = [
    {
      IMG: kharkovIMG,
      title:
        "Знищення командного пункту в Харківській області знищено кількох високопоставлених російських офіцерів.",
      Color: "#FF0000",
      text: "Hot",
    },
    {
      IMG: vilhivkaIMG,
      title:
        "Звільнення селища Вільхівка. Звільнено понад 200 мирних жителів. Та вбито 40 россійських військових",
      Color: "#14FF00",
      text: "Interesting",
    },
    {
      IMG: killDiverseIMG,
      title:
        "Ліквідував кількох російських військових диверсантів. які намагалися проникнути в тил українських військ на Донбасі.",
      Color: "#3300FF",
      text: "Common",
    },
    {
      IMG: siverskIMG,
      title:
        "Зірвано наступ російських військ на місто Сіверськ було знищено значну кількість російських військових.",
      Color: "#FF0000",
      text: "Hot",
    },
    {
      IMG: boomIMG,
      title:
        "Знищено російський військовий склад у Луганській області. Було знищено значну кількість боєприпасів.",
      Color: "#14FF00",
      text: "Interesting",
    },
    {
      IMG: generalIMG,
      title:
        "Ліквідував кількох російських генералів, що завдало значних втрат російському командуванню, та логістики.",
      Color: "#3300FF",
      text: "Common",
    },
    {
      IMG: izumIMG,
      title:
        "Провели успішну операцію та звільнили місто Ізюм на Харківщині. Знищенно ворожу техніку.",
      Color: "#FF0000",
      text: "Hot",
    },
    {
      IMG: flyBoomIMG,
      title:
        "Здійснено успішний удар по російському командному пункту в Маріуполі. Значна кількість жертв серед військових.",
      Color: "#14FF00",
      text: "Interesting",
    },
    {
      IMG: bulletIMG,
      title:
        "Зірвав постачання російських боєприпасів на Донбасі. Знищено понад 50 одиниць військової техніки.",
      Color: "#3300FF",
      text: "Common",
    },
  ];
  return (
    <NewsContainer>
      <h2 id="news">Новини</h2>
      <CardContainer>
        <CardContainerTop>
          <h3>14.11.2023</h3>
        </CardContainerTop>
        <CardContainerBottom>
          {dataInfoCard.map((card, index) =>
            index < 3 ? <NewsCard data={card} /> : console.log("Done")
          )}
        </CardContainerBottom>
      </CardContainer>
      <CardContainer>
        <CardContainerTop>
          <h3>07.10.2023</h3>
        </CardContainerTop>
        <CardContainerBottom>
          {dataInfoCard.map((card, index) =>
            (index > 2 && index < 6) ? <NewsCard data={card} /> : console.log("Done")
          )}
        </CardContainerBottom>
      </CardContainer>
      <CardContainer>
        <CardContainerTop>
          <h3>11.08.2023</h3>
        </CardContainerTop>
        <CardContainerBottom>
          {dataInfoCard.map((card, index) =>
            index > 5 ? <NewsCard data={card} /> : console.log("Done")
          )}
        </CardContainerBottom>
      </CardContainer>
    </NewsContainer>
  );
};

export default NewsStructure;
