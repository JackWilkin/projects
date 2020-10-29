import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: monospace;

    &:hover {
        background-color: #00000057;
        height: fit-content;
    }
`;

const Label = styled.div`
    color: white;
`;

export default function DesktopIcon(props) {
  const {
    label, image, fill, link,
  } = props;
  return (
    <Container onClick={link}>
      <Icon image={image} fill={fill} size={35} />
      <Label>{label}</Label>
    </Container>
  );
}
