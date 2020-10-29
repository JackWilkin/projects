import React from 'react';
import styled from 'styled-components';

const tickColor = 'red';
const Dial = styled.div`
    display: flex;
    position: relative;

    ${(props) => `width: ${props.size};`} 
    ${(props) => `height: ${props.size};`} 
`;

const Ticks = styled.div`
  position: absolute;
`;

const Tick = styled.div`
  position: absolute;
  background: black;
  box-shadow: inset 0 0 0 0 black;
  width: 3px;
  transition: box-shadow 0.5s;

  &:active {
    box-shadow: inset 0 0 5px 2px ${tickColor}, 0 0 0 1px #369;
  }
`;

const Outer = styled.div`
  border-radius: 50%;
  border: 1px solid #222;
  border-bottom: 5px solid #222;
  background-image: radial-gradient(100% 70%, #666 6%, #333 90%);
  box-shadow: 0 5px 15px 2px black, 0 0 5px 3px black, 0 0 0 12px #444;
`;

const Inner = styled.div`
  border-radius: 50%;
`;

const Grip = styled.div`
  position: absolute;
  width: 5%;
  height: 5%;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: ${tickColor};
  box-shadow: 0 0 3px 1px black;
`;

const Container = styled.div`
    padding: 2rem;
    width: 4rem;
    height: 4rem;
    .knob {
        display: flex;
        position: relative;
    }

    .knob .ticks .tick {
        position: absolute;
        background: black;
        box-shadow: inset 0 0 0 0 black;
        width: 3px;
        transition: box-shadow 0.5s;
    }
    .knob .ticks .tick.active {
        box-shadow: inset 0 0 5px 2px ${tickColor}, 0 0 0 1px #369;
    }


`;

function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
  return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}

export default function Knob(props) {
  const {
    min, max, degrees, size, value, numTicks, color,
  } = props;
  const fullAngle = degrees;
  const startAngle = (360 - fullAngle) / 2;
  const endAngle = startAngle + fullAngle;
  const margin = size * 0.15;

  const [currentDeg, setCurrentDeg] = React.useState(
    convertRange(
      min,
      max,
      startAngle,
      endAngle,
      value,
    ),
  );

  const getDeg = (cX, cY, pts) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = Math.atan(y / x) * 180 / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    const finalDeg = Math.min(Math.max(startAngle, deg), endAngle);
    return finalDeg;
  };

  const startDrag = (e) => {
    e.preventDefault();
    const knob = e.target.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (ev) => {
      let dial = getDeg(ev.clientX, ev.clientY, pts);
      if (dial === startAngle) dial--;

      setCurrentDeg(dial);
    };
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveHandler);
    });
  };

  const renderTicks = () => {
    const ticks = [];
    const incr = fullAngle / numTicks;
    const tickSize = margin + size / 2;
    for (let deg = startAngle; deg <= endAngle; deg += incr) {
      const tick = {
        deg,
        tickStyle: {
          height: tickSize + 10,
          left: tickSize - 1,
          top: tickSize + 2,
          transform: `rotate(${deg}deg)`,
          transformOrigin: 'top',
        },
      };
      ticks.push(tick);
    }
    return ticks;
  };

  const dcpy = (o) => JSON.parse(JSON.stringify(o));

  const kStyle = {
    width: size,
    height: size,
  };
  const iStyle = dcpy(kStyle);
  const oStyle = dcpy(kStyle);
  oStyle.margin = margin;
  if (color) {
    oStyle.backgroundImage = `radial-gradient(100% 70%,hsl(210, ${
      currentDeg
    }%, ${
      currentDeg / 5
    }%),hsl(${
      Math.random() * 100
    },20%,${
      currentDeg / 36
    }%))`;
  }
  iStyle.transform = `rotate(${currentDeg}deg)`;

  return (
    <Container>
      <Dial className="knob">
        <Ticks className="ticks">
          {numTicks
            ? renderTicks().map((tick, i) => (
              <Tick
                key={`${i * 7}`}
                className={
                      `tick${tick.deg <= currentDeg ? ' active' : ''}`
                    }
                style={tick.tickStyle}
              />
            ))
            : null}
        </Ticks>
        <Outer className="knob outer" style={oStyle} onMouseDown={startDrag}>
          <Inner style={iStyle}>
            <Grip />
          </Inner>
        </Outer>
      </Dial>
    </Container>
  );
}

Knob.defaultProps = {
  size: 150,
  min: 10,
  max: 30,
  numTicks: 0,
  degrees: 270,
  value: 0,
};
