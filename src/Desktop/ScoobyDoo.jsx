import React from 'react';
import Folder from '../Components/Folder';
import LabeledIcon from '../Components/LabeledIcon';
import Pdf from '../Media/scooby-doo-rules.pdf';

const dataLink = 'https://drive.google.com/drive/folders/1Uu-tClx645lTxFC3iUuFKIixlj4cDPa6?usp=sharing';
const scriptLink = 'https://colab.research.google.com/drive/1w14jbzxvgJUmvDoFDk5rNKxt2H6F4zJf?usp=sharing';

export default function ScoobyDoo(props) {
  const { openProject, setOpenProject } = props;

  return (

    <Folder label="Scooby Dooby Data (DnD)" openProject={openProject} setOpenProject={setOpenProject}>
      <LabeledIcon label="Scooby Dooby Doo" icon="file" onClick={() => { window.open(Pdf, '_blank'); }} />
      <LabeledIcon label="Scooby Data" icon="file" onClick={() => { window.open(dataLink, '_blank'); }} />
      <LabeledIcon label="Script Sample" icon="file" onClick={() => { window.open(scriptLink, '_blank'); }} />
    </Folder>

  );
}
