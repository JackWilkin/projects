import React, { Component } from "react";
import styled from "styled-components";
import Blink from 'react-blink-text';

const Container = styled.div`
  margin-bottom: 61px;
`;

export default class BlinkingLight extends React.Component {
    render() {
      return (
        <Container>
                <Blink color='yellow' text='.' fontSize='1600%' />
        </Container>
      );
    }
  }