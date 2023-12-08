import React from "react";
import styled from "styled-components";
import HotPointsTitle from "./HotPointsTitle";
import Card from "./Card";
import avdivkaIMG from "../../assets/avdivka.png";
import siverskIMG from "../../assets/siversk2.jpg";
import kupianskIMG from "../../assets/flyBoom.png";
import donbasIMG from "../../assets/killDiverse.jpg";
import bakhmutIMG from "../../assets/bakhmut.jpg"
import vilhivkaIMG from "../../assets/vilhivka2.jpeg"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardContainer = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const HotPointsStructure = () => {
  const dataInfoCard = [{
    IMG: avdivkaIMG,
    title: "Авдіївка",
    description: "Прорив оборони противника по фронту на 1.5км в глубину",
    date: "14.11.2023"
  },
  {
    IMG: siverskIMG,
    title: "Сіверськ",
    description: "Спецпризначенці провели до операції в тилу ворога. Місто звільнено",
    date: "19.06.2023"
  },
  {
    IMG: kupianskIMG,
    title: "Куп'янськ",
    description: "Знищено російський командний пункт. Високоточна зброя влучела точно в ціль",
    date: "13.01.2023"
  },
  {
    IMG: donbasIMG,
    title: "Донбас",
    description: "Прорив оборони противника по фронту на 2.3км, знищено 20 одиниць техніки",
    date: "01.09.2022"
  },
  {
    IMG: bakhmutIMG,
    title: "Бахмут",
    description: "Зрив російського наступу.Знищено значну кількість російської техніки, що змушує ворога відступити.",
    date: "13.01.2023"
  },
  {
    IMG: vilhivkaIMG,
    title: "Вільхівка",
    description: "Звільнення українських полонених. Ми діємо з гуманізмом і допомагаємо тим, хто постраждав від війни.",
    date: "13.01.2023"
  },

];
  return (
    <MainContainer>
      <HotPointsTitle></HotPointsTitle>
      <CardContainer>
        {dataInfoCard.map((card, index) =>
          index < 6 ? <Card data={card} /> : console.log("Done")
        )}
      </CardContainer>
    </MainContainer>
  );
};

export default HotPointsStructure;
