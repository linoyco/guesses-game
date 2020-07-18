import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TextField, Button, Dialog, DialogTitle } from '@material-ui/core';

import CitiesCards from '../Components/CitiesCards';
import { fetchWeather } from '../State/Actions/App';
import { IGuess } from '../State/Reducers/app';
import DisplayGuess from '../Components/DisplayGuess';

const GameDivStyle = styled.div`
    height: 73vh;

    .Select{
        margin-top: 5px;
        margin-left: 5px; 
        font-size: 3vw;
    }

    .Center-Details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }

    .Display{
        display:flex;
        flex-direction: row;
        width: 100%;
    }

    .Error{
        color: red;
    }
`;

const GameBox: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [localCity, setLocalCity] = useState<string>('');
    const [isWin, setIsWin] = useState<string>('');
    const [userGuess, setUserGuess] = useState<number>(0);
    const [answers, setAnswers] = useState<Array<IGuess>>([]);
    const [open, setOpen] = useState<boolean>(false);

    const errorMessage = useSelector((state: any) => state.app.errorMessage);
    const currentWeather: number = useSelector((state: any) => state.app.currentWeather);

    React.useEffect(() => {
        if (answers.length === 5) {
            checkIfWin();
            setOpen(true);
            setAnswers([]);
        }
    }, [answers.length]);

    React.useEffect(() => {
        mapAnswers();
    }, [userGuess]);

    React.useEffect(() => {
        answers.map(answer => {
            if (localCity === answer.city) {
                setLocalCity('Please select a city you have not yet selected');
            }
        })
    }, [localCity]);

    const citiesList = [
        'Haifa',
        'London',
        'New York',
        'Tokyo',
        'Delhi',
        'Manila',
        'Rio de Janeiro',
        'Los Angeles',
        'Paris',
        'Chicago'
    ];

    const handleCitySelected = (city: string) => {
        setLocalCity(city);
        dispatch(fetchWeather(city));
    }

    const handleCheckGuess = () => {
        let isRight: boolean = false;
        let minGuess: number = currentWeather - 5;
        let maxGuess: number = currentWeather + 5;
        let trySome: Array<IGuess> = answers;
        let newGuess: IGuess = {
            color: false,
            currentWeather: 0,
            guess: 0,
            city: ''
        }

        if (userGuess !== 0 && localCity !== 'Please select a city you have not yet selected') {

            if (userGuess <= maxGuess && userGuess >= minGuess) {
                isRight = true;
            }

            newGuess = {
                color: isRight,
                currentWeather: currentWeather,
                guess: userGuess,
                city: localCity
            }
            setUserGuess(0);
            trySome.push(newGuess);
            setAnswers(trySome);
            mapAnswers();
        }
    }

    const renderInput = () => {
        if (localCity)
            return (
                <div>
                    <TextField
                        type='number'
                        value={userGuess || ''}
                        placeholder='Your temp guess'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserGuess(e.target.valueAsNumber)} />
                    <Button onClick={() => handleCheckGuess()}>Check</Button>
                </div>
            )
    }

    const mapAnswers = () => {
        if (answers.length === 0) {
            return <div></div>;
        } else {
            return (
                answers.map((answer, idx) => (
                    <DisplayGuess
                        key={idx}
                        city={answer.city}
                        color={answer.color}
                        guess={answer.guess}
                        currentWeather={answer.currentWeather} />
                ))
            );
        }
    };

    const finishDialog = <Dialog fullWidth={true} open={open}>
        <DialogTitle>You are {isWin}</DialogTitle>
        <Button onClick={() => setOpen(false)}>Restart</Button>
    </Dialog>;

    const checkIfWin = () => {
        let win: number = 0;
        let loss: number = 0;
        answers.map(answer => {
            (answer.color) ? win++ : loss++;

            (win > loss) ? setIsWin('Winner!!!') : setIsWin('Loss!!!');
        });
    }

    const localErr = errorMessage ? <p className='Error'>{errorMessage}</p> : null;

    return (
        <GameDivStyle>
            {localErr}
            {finishDialog}
            <p className='Select'>Select City from list:</p>
            <CitiesCards
                citeisList={citiesList}
                cityOnClick={handleCitySelected} />
            <div className='Center-Details'>
                <p className='Select'>City Name: {localCity}</p>
                {renderInput()}
                <div className='Display'>
                    {mapAnswers()}
                </div>
            </div>
        </GameDivStyle>
    );
}

export default GameBox;