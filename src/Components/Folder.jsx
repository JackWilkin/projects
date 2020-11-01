import React from 'react';
import styled from 'styled-components';
import DesktopIcon from './DesktopIcon';

const Container = styled.div`

`;
const Popup = styled.div`
  background-color: grey;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;

  width: 75%;
  height: 20rem;

  position: fixed;
  top: 15%;
  left: 10%;
`;

const Buttons = styled.div`
    background-color: yellow;
    height: 1.5rem;
    width: 100%;
`;

const CloseButton = styled.div`
    background-color: red;
    height: inherit;
    width: 1rem;
    float: right;
`;

const Contents = styled.div`
    background-color: white;
    flex-grow: 1;

`;

export default function Folder(props) {
  const { label } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Container>
      <DesktopIcon link={() => setIsOpen(true)} label={label} image="folder" />
      <Popup open={isOpen}>
        <Buttons>
          <CloseButton onClick={() => setIsOpen(false)} />
        </Buttons>
        <Contents />
      </Popup>
    </Container>

  );
}
