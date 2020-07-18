import React from 'react';
import styled from 'styled-components';

import { IGuess } from '../State/Reducers/app';

interface IStyleProps {
    color: string;
}

const StyledDisplay: any = styled.div<IStyleProps>`
    border: 2px solid black;
    border-radius: 10px;
    margin: 1vw;
    padding: 1%;

    span{
        color: ${(props: IStyleProps) => props.color}
    }

    .city{
        color: black;
    }
`;

const DisplayGuess: React.FunctionComponent<IGuess> = ({ color, guess, currentWeather, city }) => (
    <StyledDisplay color={color ? 'green' : 'red'}>
        <span className='city'>{city}</span><br />
        <span>Temp: {currentWeather}</span><br />
        <span>Guess: {guess}</span>
    </StyledDisplay>
);

export default DisplayGuess;