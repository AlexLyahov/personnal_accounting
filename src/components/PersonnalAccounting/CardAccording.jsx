import React,{ useState } from "react";
import styled from "styled-components";
import searchIMG from "../../assets/search.svg";
import peopleIMG from "../../assets/person/omegko.png";
import people2IMG from "../../assets/person/omegko2.png";
import people3IMG from "../../assets/person/andruschenko.png";

const MainContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  background-color: black;
  border-radius: 15px;
  width: 70%;
  margin: 100px 0;
  h3 {
    margin: 0;
    padding: 5px 0;
  }
`;

const CardMain = styled.div`
  display: flex;
  background-color: black;
`;

const CurrentPeople = styled.div`
  display: flex;
  color: white;
  border: 3px solid white;
  border-radius: 15px;
  padding: 5px;
  img {
    border-radius: 15px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
  h4{
    margin: 0;
  }
  @media screen and (max-width: 1440px){
    flex-direction: column;
    img{
        object-fit: cover;
        height: 200px;
        width: 90%;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  padding: 6px 0;
  img {
    width: 20px;
    background-color: black;
    padding: 0 5px;
    border-radius: 0 15px 15px 0;
    border: 2px solid black;
  }
  input {
    height: 100%;
    width: 70%;
    background-color: #ffc700;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border: 3px solid black;
  }
`;
const CardLeft = styled.div`
  display: flex;
  width: 80%;
  table {
    width: 100%;
  }
  thead {
    background-color: #ffc700;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  tbody {
    color: white;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
`;
const CardRight = styled.div`
  width: 30%;
  span {
    font-weight: 300;
  }
  .gold {
    color: #ffc700;
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

const Search = styled.div``;
const CardAccording = () => {
  const peopleData = [
    {
      name: "Ляхов Олексій",
      rank: "Молодший лейтенант",
      position: "Водій 1 роти",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam commodi totam? Commodi accusantium rerum sequi ex iste quo",
      image: peopleIMG,
    },
    {
      name: "Андрущенко Марина",
      rank: "Лейтенант",
      position: "Медик",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam commodi totam? Commodi accusantium rerum sequi ex iste quo",
      image: people3IMG,
    },
    {
      name: "Поліванчук Ростислав",
      rank: "молодший Солдат",
      position: "прибиральник",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam commodi totam? Commodi accusantium rerum sequi ex iste quo",
      image: people2IMG,
    },
  ];
  const [currentPerson, setCurrentPerson] = useState({
    name: "Ляхов Олексій",
    rank: "Молодший лейтенант",
    position: "Водій 1 роти",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam commodi totam? Commodi accusantium rerum sequi ex iste quo",
    image: peopleIMG,
  });

  const handleTableRowClick = (name) => {
    const selectedPerson = peopleData.find((person) => person.name === name);
    setCurrentPerson({
      name: selectedPerson.name,
      rank: selectedPerson.rank,
      position: selectedPerson.position,
      description: selectedPerson.description,
      image: selectedPerson.image,
    });
  };
  return (
    <MainContainer>
      <CardLeft>
        <table>
          <thead>
            <tr>
              <td>Номер</td>
              <td>Місцезнаходження</td>
              <td>ПІБ</td>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleTableRowClick("Ляхов Олексій")}>
              <td>3</td>
              <td>Авдіївка</td>
              <td>Ляхов Олексій Андрійович</td>
            </tr>
            <tr onClick={() => handleTableRowClick("Андрущенко Марина")}>
              <td>1</td>
              <td>Маріуполь</td>
              <td>Андрущенко Марина Батьківна</td>
            </tr>
            <tr onClick={() => handleTableRowClick("Поліванчук Ростислав")}>
              <td>1</td>
              <td>Штаб</td>
              <td>Поліванчук Ростислав Батькович</td>
            </tr>
          </tbody>
        </table>
      </CardLeft>
      <CardRight>
        <InputContainer>
          <input type="search" name="" id="" placeholder="пошук" />
          <img src={searchIMG} alt="" />
        </InputContainer>
        <CardMain>
          <CurrentPeople>
          <img src={currentPerson.image} alt="" />
            <div className="text-people">
              <h3>{currentPerson.name}</h3>
              <h4>{currentPerson.rank}</h4>
              <span className="gold">{currentPerson.position}</span>
              <br />
              <span>{currentPerson.description}</span>
            </div>
          </CurrentPeople>
        </CardMain>
      </CardRight>
      <Search></Search>
    </MainContainer>
  );
};

export default CardAccording;
