import React from 'react';
import styled from 'styled-components';
import CDDrive from './Components/CDDrive';
import Knob from './Components/Knob';
import BlinkingLight from './Components/BlinkingLight';
import DesktopIcon from './Components/DesktopIcon';
import Icon from './Components/Icon';
import Pdf from './Media/scooby-doo-rules.pdf';
import Folder from './Components/Folder';

const Computer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Screen = styled.div`
  display: flex;
  margin: 5%;
  background-color: #0000eb69;
  flex-grow: 1;
  border: inset 5px gray;
  flex-wrap: wrap;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1rem;
  margin: 0 5%;
`;

export default function CommandCenter() {
  return (
    <Computer>
      <Screen>
        <DesktopIcon label="github" image="computer" link={() => { window.location.href = 'https://github.com/JackWilkin'; }} />
        <DesktopIcon label="Cookbook" image="file" link={() => { window.location.href = 'https://www.ourrecipes.me/'; }} />
        <DesktopIcon label="Scooby Doo" image="file" link={() => { window.location.href = Pdf; }} />
        <DesktopIcon label="fish" image="file" link={() => { window.location.href = 'https://jackwilkin.github.io/fish/'; }} />
        <Folder label="raytracer" />
        <DesktopIcon label="recycle" image="recycle" />
      </Screen>
      <Buttons>
        <Knob
          size={50}
          numTicks={20}
          degrees={180}
          min={1}
          max={100}
          value={30}
        />
        <CDDrive />
        <Icon image="power-button" fill="yellowgreen" size={35} />
        <BlinkingLight />
      </Buttons>
    </Computer>

  );
}
