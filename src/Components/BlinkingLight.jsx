import React from 'react';
import styled from 'styled-components';
import Blink from 'react-blink-text';

const Container = styled.div`
  margin-bottom: 61px;
  text-shadow: 0px 0px 7px black;
`;

export default function BlinkingLight() {
  return (
    <Container>
      <Blink fontStyle="Helvetica" color="yellow" text="." fontSize="1600%" />
    </Container>

  );
}
