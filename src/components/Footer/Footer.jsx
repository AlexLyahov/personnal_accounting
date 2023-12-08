import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import fb from "../../assets/fb.svg";
import inst from "../../assets/inst.svg";
import tg from "../../assets/tg.svg";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  h3 {
    color: #ffc700;
    font-size: 24px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
    transition: all 200ms ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  a{
    display: flex;
    align-items: center;
  }
  span{
    padding-left: 5px;
  }
`;
const InterestingLink = styled.div`
  display: flex;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <Navigation>
        <h3>Навігація</h3>
        <Link to="home" smooth={true} duration={500}>Головна</Link>
      <Link to="news" smooth={true} duration={500}>Новини</Link>
      <Link to="about" smooth={true} duration={500}>Про нас</Link>
      <Link to="hotspots" smooth={true} duration={500}>Гарячі точки</Link>
      <Link to="accounting" smooth={true} duration={500}>Облік</Link>
      </Navigation>
      <Contact>
        <h3>Контакти</h3>
        <a href="/">
          <img src={fb} alt="" />
          <span>@krakenUA</span>
        </a>
        <a href="/">
          <img src={inst} alt="" />
          <span>@kraken</span>
        </a>
        <a href="/">
          <img src={tg} alt="" />
          <span>@kraken_bot</span>
        </a>
      </Contact>
      <InterestingLink>
        <h3>Цікаві посилання</h3>
        <a href="https://www.radiosvoboda.org/a/rosiya-ukrayina-zahroza-viyny/31703318.html">
          Новини з фронту
        </a>
        <a href="https://i-ua.tv/programs/suspilni-dialohy/42604-ekspert-pro-zakinchennia-viiny-i-mistse-ukrainy-v-novomu-svitoporiadku?gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTCzoXkHo5coEhN5QFmb_NnS8Jwhaje60XtMPyUdVbd6-M88DuPzETeBoCFtIQAvD_BwE">
          Україна Зараз Інфо
        </a>
        <a href="https://alerts.in.ua/">Alerts In UA</a>
        <a href="https://helpvolunteer.com.ua/campaigns/896">Збір на мавік</a>
        <a href="https://tsn.ua/">TCN UA</a>
      </InterestingLink>
    </FooterContainer>
  );
};

export default Footer;
