import React from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';
import LabeledIcon from '../Components/LabeledIcon';
import raytrace from '../Media/raytracer.png';
import scenegraph from '../Media/scenegraph.xml';
import readme from '../Media/README.txt';
import opengl from '../Media/opengl.mov';
import Raytracer from '../Media/Raytracer.jar';

export default function RayTracer(props) {
  const { openProject, setOpenProject } = props;
  //   const [openProject, setOpenProject] = React.useState('');

  return (

    <Folder label="raytracer" openProject={openProject} setOpenProject={setOpenProject}>
      <LabeledIcon label="README" icon="file" onClick={() => { window.open(readme, '_blank'); }} />
      <LabeledIcon label="Raytracer.jar" icon="file" onClick={() => { window.open(Raytracer, '_blank'); }} />
      <LabeledIcon label="scenegraph.xml" icon="file" onClick={() => { window.open(scenegraph, '_blank'); }} />
      <LabeledIcon label="opengl.mov" icon="file" onCli2ck={() => { window.open(opengl, '_blank'); }} />
      <LabeledIcon label="raytrace.png" icon="file" onClick={() => { window.open(raytrace, '_blank'); }} />
    </Folder>

  );
}
