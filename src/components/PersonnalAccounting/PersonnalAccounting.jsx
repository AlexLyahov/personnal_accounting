import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/bg_os.png"
import CardAccording from "./CardAccording";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bgIMG}), lightgray 50% / cover no-repeat;
    h2 {
        width: 100%;
        text-align: center;
        background-color: black;
        color: white;
        font-size: 32px;
        font-weight: 500;
        padding: 10px 0;
        margin: 0;
    }
`

const PersonalAccounting = () => {
    return(
        <MainContainer id="accounting">
            <h2>Облік Особового Складу</h2>
            <CardAccording/>
        </MainContainer>

    )
}

export default PersonalAccounting;