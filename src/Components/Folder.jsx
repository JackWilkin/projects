import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Popup = styled.div`
  background-color: grey;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;

  width: 75%;
  height: inherit;
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
  const {
    label, children, openProject, setOpenProject,
  } = props;

  const [activeDrags, setActiveDrags] = React.useState(0);

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  return (

    <Draggable bounds="parent" onStart={onStart} onStop={onStop}>
      <Popup open={openProject === label}>
        <Buttons>
          <CloseButton onClick={() => setOpenProject('')}>
            X
          </CloseButton>
        </Buttons>
        <Contents>
          {children}
        </Contents>

      </Popup>
    </Draggable>

  );
}
