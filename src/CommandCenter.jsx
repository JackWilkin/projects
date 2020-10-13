import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import Power from './Media/power-button.svg';
import DVD from './Media/DVD.svg';
import Knob from './Components/Knob.jsx';
import BlinkingLight from './Components/BlinkingLight.jsx'; 
import Icon from './Components/Icon.jsx';       

const Computer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  background-color: #0000eb69;
  flex-grow: 1;
  border: inset 5px gray;
`;

const ScoobyDoo = styled.a`
  background: #17BDB9;
  color: #6A3400;
  font-family: "Scooby Doo";
  padding: 4rem;
  font-size: 3rem;
  width: fit-content;
`;

const Recipes = styled.a`
  padding: 4rem;
  font-size: 3rem;
  width: fit-content;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  margin: 0 5%;
`;

const PowerButton = styled.button`
  background: none;
  padding: 0.75rem;
  border-radius: 2.5rem;
  margin-left: 1rem;

  &:focus {
    outline: none;
    border-color: white;
  }

  &:hover {
    border-color: green;
  }
  svg {
    height: 3rem;
    width: auto;
    fill: greenyellow;
  }
`;

const CDDrive = styled.div`
  border: inset;
  background-color: darkgrey;
  flex-grow: 1;
  height: 2rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  svg {
    height: inherit;
    width: auto;
    fill: gray;
  }
`;

export default function CommandCenter() {


    return (
      <Computer>
        <Screen>
          <Icon name="file" size={35} />
          <Icon name="file" size={35} />
          <Icon name="file" size={35} />
          <Icon name="computer" size={35} />
          <Icon name="recycle" size={35} />
        </Screen>
        <Buttons>
        <Knob
              size={50}
              numTicks={25}
              degrees={260}
              min={1}
              max={100}
              value={30}
            />
          <CDDrive> <DVD/> </CDDrive>
        
          
         
          <PowerButton><Power/></PowerButton>
          <BlinkingLight />
  
        </Buttons>
      </Computer>

    );
  }

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<CommandCenter />, wrapper) : false;
