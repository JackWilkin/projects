import React from 'react';
import styled from 'styled-components';
import CDDrive from './Components/CDDrive';
import Knob from './Components/Knob';
import BlinkingLight from './Components/BlinkingLight';
import DesktopIcon from './Components/DesktopIcon';
import Icon from './Components/Icon';
import Pdf from './Media/scooby-doo-rules.pdf';
import raytracer from './Media/raytracer.png';
import scenegraph from './Media/scenegraph.xml';
import readme from './Media/README.txt';
import Folder from './Components/Folder';
import LabeledIcon from './Components/LabeledIcon';

const Computer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Screen = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 3rem;
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
        <DesktopIcon label="github" color="white" icon="computer" onClick={() => { window.location.href = 'https://github.com/JackWilkin'; }} />
        <DesktopIcon label="Cookbook" icon="file" onClick={() => { window.location.href = 'https://www.ourrecipes.me/'; }} />
        <DesktopIcon label="Scooby Doo" icon="file" onClick={() => { window.location.href = Pdf; }} />
        <DesktopIcon label="fish" icon="file" onClick={() => { window.location.href = 'https://jackwilkin.github.io/fish/'; }} />
        <Folder label="raytracer">
          <LabeledIcon label="README" icon="file" onClick={() => { window.open(readme, '_blank'); }} />
          <LabeledIcon label="scenegraph.xml" icon="file" onClick={() => { window.open(scenegraph, '_blank'); }} />
          <LabeledIcon label="raytrace.png" icon="file" onClick={() => { window.open(raytracer, '_blank'); }} />
          <LabeledIcon label="opengl.mov" icon="file" />
        </Folder>
        <DesktopIcon label="recycle" icon="recycle" />
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
