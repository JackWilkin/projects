import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: monospace;
    height: fit-content;

    &:hover {
        background-color: #00000057;
        height: fit-content;
    }
`;

const Label = styled.div`
    color: ${(props) => (props.color)};
`;

export default function LabeledIcon(props) {
  const {
    onClick, label, icon, iconFill, labelColor,
  } = props;
  return (
    <Container onClick={onClick}>
      <Icon image={icon} fill={iconFill} size={35} />
      <Label color={labelColor}>{label}</Label>
    </Container>
  );
}
