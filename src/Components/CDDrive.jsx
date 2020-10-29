import React from 'react';
import styled from 'styled-components';
import DVD from '../Media/SVG/vidnet.svg';

// TODO: gonna need some kind of hover event on the ellipse
const Container = styled.div`
  margin: 0 2rem;
  flex-grow: 1;
  
`;

const Door = styled.div`
  border: inset;
  background-color: ${(props) => (props.open ? 'black' : 'darkgrey')};
  border: ${(props) => (props.open ? 'none' : 'inset')};
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
`;

const Open = styled.div`
  justify-contents: center;
  display: flex;
  margin: auto;

  svg {
    height: fit-content;
  }

  
`;

const Button = styled.div`
  margin-left: 2rem;
  height: 1rem;
  width: 2rem;
  background-color: #454545;
  border-radius: 15%;

  &:hover {
    background-color: green;
  }
`;

export default function CDDrive() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Container>
      <Door open={isOpen} onClick={() => setIsOpen(!isOpen)}>

        {isOpen ? (
          <Open onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://jackwilkin.github.io/vidnet/';
          }}
          >
            <DVD />
          </Open>
        ) : <Button /> }

      </Door>
    </Container>
  );
}
