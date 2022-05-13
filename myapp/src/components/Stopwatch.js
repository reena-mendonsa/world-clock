import React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 15);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };
  componentWillUnmount() {
    clearInterval(this.watch);
  }
  render() {
    return (
      <div className="stopwatch">
        <h2 className="stopwatch-header">Stopwatch</h2>
        <div className="stopwatch-display">
          {this.state.currentTimeMin} : {this.state.currentTimeSec} :
          {this.state.currentTimeMs}
        </div>
        {this.state.running === false &&
          this.state.currentTimeMin === 0 &&
          this.state.currentTimeSec === 0 &&
          this.state.currentTimeMs === 0 && (
            <button onClick={this.start}>START</button>
          )}
        {this.state.running === true && (
          <button onClick={this.stop}>STOP</button>
        )}
        {this.state.running === false && this.state.currentTimeMs > 0 && (
          <button onClick={this.start}>RESUME</button>
        )}
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Stopwatch;
