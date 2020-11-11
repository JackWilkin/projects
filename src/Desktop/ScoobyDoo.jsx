import React from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';
import LabeledIcon from '../Components/LabeledIcon';
import Pdf from '../Media/scooby-doo-rules.pdf';

const dataLink = 'https://drive.google.com/drive/folders/1Uu-tClx645lTxFC3iUuFKIixlj4cDPa6?usp=sharing';

export default function ScoobyDoo(props) {
  const { openProject, setOpenProject } = props;

  return (

    <Folder label="Scooby Dooby Data (DnD)" openProject={openProject} setOpenProject={setOpenProject}>
      <LabeledIcon label="Scooby Dooby Doo" icon="file" onClick={() => { window.open(Pdf, '_blank'); }} />
      <LabeledIcon label="Scooby Data" icon="file" onClick={() => { window.open(dataLink, '_blank'); }} />
    </Folder>

  );
}
