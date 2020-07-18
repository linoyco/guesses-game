import React from 'react';
import styled from 'styled-components';

const CardDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   

    .buttons-bar{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
        width: 100%;
    }

    button{
        background-color: white;
        width: 98%;
        font-size: 2vw;
        border: 2px solid gray;
        border-radius: 5px;
        margin: 1vh;
    }
`;

interface IProps {
    citeisList: Array<string>;
    cityOnClick: (city: string) => void;
}

const CitiesCards: React.FunctionComponent<IProps> = ({ citeisList, cityOnClick }) => (
    <CardDivStyle>
        <div className='buttons-bar'>{
            citeisList.map((city, idx) => {
                while (idx <= 4) {
                    return (
                        <button key={idx} onClick={() => cityOnClick(city)}>{city}</button>
                    )
                }
            })}
        </div>
        <div className='buttons-bar'>{
            citeisList.map((city, idx) => {
                while (idx > 4) {
                    return (
                        <button key={idx} onClick={() => cityOnClick(city)} > {city}</button>
                    )
                }
            })
        }</div>

    </CardDivStyle >
);


export default CitiesCards;