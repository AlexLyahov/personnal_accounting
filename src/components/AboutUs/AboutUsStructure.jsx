import React from "react";
import styled from "styled-components";
import logoIMG from "../../assets/logo.png";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  align-items: center;
  h2{
    text-align: center;
    padding: 10px 0;
    font-size: 32px;
    background-color: black;
    color: white;
    width: 100%;
  }
`;
const AboutAs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0;
  img {
    width: 400px;
  }
  @media screen and (max-width: 1300px){
    flex-direction: column;
  }
`;
const AboutAsText = styled.div`
    width: 40%;
  h3{
    font-size: 32px;
    margin-top: 0;
  }
  span{
    font-size: 24px;
  }
  @media screen and (max-width: 1300px){
    h3{
      margin-top: 100px;
    }
  }
`;
const AboutUsStructure = () => {
  return (
    <AboutContainer>
      <h2 id="about">ПРО НАС</h2>
      <AboutAs>
        <img src={logoIMG} alt="" />
        <AboutAsText>
          <h3>Історія нашого підрозділу</h3>
          <span>
            Підрозділ був створений на базі Головного управління розвідки
            Міністерства оборони України. Його очолили два досвідчені офіцери:
            Костянтин Немічев і Сергій Величко. Спецпризначенці "Кракена"
            пройшли спеціальну підготовку, яка включала в себе навчання з
            ведення бойових дій у тилу ворога, диверсійну підготовку, а також
            навички роботи з розвідувальними даними. Перші операції
            спецпідрозділу "Кракен" відбулися вже в квітні 2022 року.
            Спецпризначенці провели успішні удари по російських командних
            пунктах і складах з боєприпасами. Вони також ліквідували кількох
            російських генералів.
          </span>
        </AboutAsText>
      </AboutAs>
    </AboutContainer>
  );
};

export default AboutUsStructure;
