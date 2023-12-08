import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: black;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  li {
    color: white;
    list-style-type: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      color: #FFC700;
      transform: scale(1.2);
    }
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-left: 0;
    padding-left: 0;
  }
  span {
    color: transparent;
      }

  @media screen and (max-width: 1200px) {
    height: auto;

    li {
      display: flex;
      justify-content: center;
      font-size: 32px;
      margin-bottom: 10px;
    }

    ul {
      width: 80%;
      flex-direction: column;
      display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    }

    .menu-button {
      display: block;
      font-size: 24px;
      margin: 10px;
      border: 3px solid white;
      border-radius: 15px;
      padding: 5px;
      color: white;
      cursor: pointer;
    }
    span {
    color: white;
      }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer menuOpen={menuOpen}>
      <div className="menu-button" onClick={toggleMenu}>
        <span>Меню</span>
      </div>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Головна</Link></li>
        <li><Link to="news" smooth={true} duration={500}>Новини</Link></li>
        <li><Link to="about" smooth={true} duration={500}>Про нас</Link></li>
        <li><Link to="hotspots" smooth={true} duration={500}>Гарячі точки</Link></li>
        <li><Link to="accounting" smooth={true} duration={500}>Облік</Link></li>
        <li><Link to="contacts" smooth={true} duration={500}>Контакти</Link></li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
