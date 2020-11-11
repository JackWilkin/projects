import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 61px;
  text-shadow: 0px 0px 7px black;
  width: 2rem;
`;

const Text = styled.div`
  color: yellow;
  font-size: 1600%;

`;

function BlinkingText(props) {
  const [showText, setShowText] = React.useState(true);
  const { text } = props;

  React.useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((state) => !state);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const display = showText ? text : ' ';
  return (
    <Text>{display}</Text>
  );
}

export default function BlinkingLight() {
  return (
    <Container>
      <BlinkingText color="yellow" text="." fontSize="1600%" />
    </Container>

  );
}
