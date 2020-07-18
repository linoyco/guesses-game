import React from 'react';
import { createGlobalStyle } from 'styled-components';

import background from './images/countries.jpg';
import GameBox from './Containers/GameBox';

const GlobalStyle = createGlobalStyle`
  html{
  height: 100%;
  font-family: arial;
  background-image: url(${background}); 
  background-size: cover;
  }

  body {
    font-weight: bold;
    padding: 0;
    margin:0;
    height: 100%;
  }

  .App{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
  }

  .Game{
    background-color: white;
    border: 5px solid black;
    width: 87vw;
    height: 87vh;
  }

  .Header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 9vh;
    background-color: black;

    padding:1.5%;
  }

  .Header-Text{
    font-size: 5vw;
    font-weigh: bold;
    color: yellow;  
    text-shadow: 3px 3px 4px gray; 
  }
`;



const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <div className='Game'>
        <div className='Header'>
          <p className='Header-Text'>
            Welcome To Guessing Game!
          </p>
        </div>
        <GameBox />
      </div>
    </div>
  );
}

export default App;
