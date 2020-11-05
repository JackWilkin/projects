import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import LabeledIcon from './LabeledIcon';

const Container = styled.div`
  display: flex;
`;
const Popup = styled.div`
  background-color: grey;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;

  width: 75%;
  height: inherit;
  position: aboslute;
`;

const Buttons = styled.div`
    background-color: darkblue;
    height: 1.5rem;
    width: 100%;
`;

const CloseButton = styled.button`
    background-color: yellow;
    height: inherit;
    width: 1.5rem;
    float: right;
    color: grey;
`;

const Contents = styled.div`
    background-color: lightgrey;
    flex-grow: 1;

    display: flex;
    flex-wrap: wrap;
`;
export default function Folder(props) {
  const { label, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDrags, setActiveDrags] = React.useState(0);

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart, onStop };
  return (
    <Container>
      <LabeledIcon onClick={() => setIsOpen(true)} label={label} icon="folder" labelColor="white" />
    </Container>

  );
}
