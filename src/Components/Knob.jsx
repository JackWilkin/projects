import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 2rem;
    width: 4rem;
    height: 4rem;
    .knob {
        display: flex;
        position: relative;
    }
    .knob .ticks {
        position: absolute;
    }
    .knob .ticks .tick {
        position: absolute;
        background: black;
        box-shadow: inset 0 0 0 0 black;
        width: 3px;
        transition: box-shadow 0.5s;
    }
    .knob .ticks .tick.active {
        box-shadow: inset 0 0 5px 2px #509eec, 0 0 0 1px #369;
    }
    .knob.outer {
        border-radius: 50%;
        border: 1px solid #222;
        border-bottom: 5px solid #222;
        background-image: radial-gradient(100% 70%, #666 6%, #333 90%);
        box-shadow: 0 5px 15px 2px black, 0 0 5px 3px black, 0 0 0 12px #444;
    }
    .knob.inner {
        border-radius: 50%;
    }
    .knob.inner .grip {
        position: absolute;
        width: 5%;
        height: 5%;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: #509eec;
        box-shadow: 0 0 3px 1px black;
    }
`;


export default class Knob extends React.Component {
    constructor(props) {
      super(props);
      this.fullAngle = props.degrees;
      this.startAngle = (360 - props.degrees) / 2;
      this.endAngle = this.startAngle + props.degrees;
      this.margin = props.size * 0.15;
      this.currentDeg = Math.floor(
        this.convertRange(
          props.min,
          props.max,
          this.startAngle,
          this.endAngle,
          props.value
        )
      );
      this.state = { deg: this.currentDeg };
    }
  
    startDrag = e => {
    
      e.preventDefault();
      const knob = e.target.getBoundingClientRect();
      const pts = {
        x: knob.left + knob.width / 2,
        y: knob.top + knob.height / 2
      };
      const moveHandler = e => {
        this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
        if (this.currentDeg === this.startAngle) this.currentDeg--;
        let newValue = Math.floor(
          this.convertRange(
            this.startAngle,
            this.endAngle,
            this.props.min,
            this.props.max,
            this.currentDeg
          )
        );
        this.setState({ deg: this.currentDeg });
        // this.props.onChange(newValue);
      };
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", e => {
        document.removeEventListener("mousemove", moveHandler);
      });
    };
  
    getDeg = (cX, cY, pts) => {
      const x = cX - pts.x;
      const y = cY - pts.y;
      let deg = Math.atan(y / x) * 180 / Math.PI;
      if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
        deg += 90;
      } else {
        deg += 270;
      }
      let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
      return finalDeg;
    };
  
    convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
      return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
    };
  
    renderTicks = () => {
      let ticks = [];
      const incr = this.fullAngle / this.props.numTicks;
      const size = this.margin + this.props.size / 2;
      for (let deg = this.startAngle; deg <= this.endAngle; deg += incr) {
        const tick = {
          deg: deg,
          tickStyle: {
            height: size + 10,
            left: size - 1,
            top: size + 2,
            transform: "rotate(" + deg + "deg)",
            transformOrigin: "top"
          }
        };
        ticks.push(tick);
      }
      return ticks;
    };
  
    dcpy = o => {
      return JSON.parse(JSON.stringify(o));
    };
  
    render() {
      let kStyle = {
        width: this.props.size,
        height: this.props.size
      };
      let iStyle = this.dcpy(kStyle);
      let oStyle = this.dcpy(kStyle);
      oStyle.margin = this.margin;
      if (this.props.color) {
        oStyle.backgroundImage =
          "radial-gradient(100% 70%,hsl(210, " +
          this.currentDeg +
          "%, " +
          this.currentDeg / 5 +
          "%),hsl(" +
          Math.random() * 100 +
          ",20%," +
          this.currentDeg / 36 +
          "%))";
      }
      iStyle.transform = "rotate(" + this.state.deg + "deg)";
  
      return (
          <Container>
        <div className="knob" style={kStyle}>
          <div className="ticks">
            {this.props.numTicks
              ? this.renderTicks().map((tick, i) => (
                  <div
                    key={i}
                    className={
                      "tick" + (tick.deg <= this.currentDeg ? " active" : "")
                    }
                    style={tick.tickStyle}
                  />
                ))
              : null}
          </div>
          <div className="knob outer" style={oStyle} onMouseDown={this.startDrag}>
            <div className="knob inner" style={iStyle}>
              <div className="grip" />
            </div>
          </div>
        </div>
        </Container>
      );
    }
  }
  Knob.defaultProps = {
    size: 150,
    min: 10,
    max: 30,
    numTicks: 0,
    degrees: 270,
    value: 0
  };
  
//   class App extends React.Component {
//     render() {
//       return (
//         <div className="App">
//           <Knob
//             size={100}
//             numTicks={25}
//             degrees={260}
//             min={1}
//             max={100}
//             value={30}
//             color={true}
//           />
  
//           <Knob
//             numTicks={125}
//             degrees={180}
//             min={1}
//             max={100}
//             value={0}
//           />
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<App />, document.querySelector("body"));
  