import React from "react";

import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends React.Component {
  state = {
    stopwatch: false,
    countdown: false,
  };
  close = (key) => {
    this.setState({ [key]: false });
  };
  handleStopwatch = () => {
    this.setState({ stopwatch: !this.state.stopwatch });
  };
  handleCountdown = () => {
    this.setState({ countdown: !this.state.countdown });
  };
  render() {
    return (
      <div className="container">
        <h1> Timers </h1>
        <div className="Timers">
          {this.state.stopwatch ? (
            <Stopwatch handleStopwatch={this.handleStopwatch} />
          ) : (
            <button className="button" onClick={this.handleStopwatch}>
              Show Stopwatch
            </button>
          )}
          {this.state.countdown ? (
            <Countdown handleCountdown={this.handleCountdown} />
          ) : (
            <button className="button" onClick={this.handleCountdown}>
              Show Countdown
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
