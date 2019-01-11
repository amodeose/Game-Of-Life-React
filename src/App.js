import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      generation: 1,
      running: true,
      speed: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    const initialize = () => {
      let arr = [];
      for (let i = 1; i < 1601; i++) {
        let odds = Math.random();
        if (odds > 0.85) {
          if (i < 1600/3) {
            arr.push(<div className={"red cell alive"} key={i} onClick={this.handleClick} id={i}></div>);
          } else if (i > 3200/3) {
            arr.push(<div className={"green cell alive"} key={i} onClick={this.handleClick} id={i}></div>);
          } else {
            arr.push(<div className={"blue cell alive"} key={i} onClick={this.handleClick} id={i}></div>);
          }
        } else {
          arr.push(<div className={"cell"} key={i} onClick={this.handleClick} id={i}></div>);
        }
      }
      return arr;
    };

    this.setState({
      initialize: initialize()
    })

    const myInterval = setInterval(() => {

      

      for (let i = 1; i < 1601; i++) {

        let current = document.getElementById(i);
        let count = 0;
        let red = 0;
        let green = 0;
        let blue = 0;
        let neighbors = [
          i - 40,
          i - (39),
          i - (41),
          i + 1,
          i - 1,
          i + 40,
          i + 39,
          i + 41];

        if (i <= 40) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 40 && value !== i - 39 && value !== i - 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i >= 1561) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i + 40 && value !== i + 39 && value !== i + 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i === 1) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 1) {
              return true;
            } else {
              return false;
            }
          })
        }

        if ((i - 1) % 40 === 0) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 1 && value !== i - 41 && value !== i + 39) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i % 40 === 0) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i + 1 && value !== i - 39 && value !== i + 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        neighbors.forEach(function(element) {
          if (document.getElementById(element).classList.contains("alive")) {
            count++;
          };
          if (document.getElementById(element).classList.contains("red")) {
            red++;
          };
          if (document.getElementById(element).classList.contains("green")) {
            green++;
          };
          if (document.getElementById(element).classList.contains("blue")) {
            blue++;
          };
           
        })

        switch (count) {
          case 0:
          case 1:
            current.classList.remove("alive");
            current.classList.remove("red");
            current.classList.remove("green");
            current.classList.remove("blue");
            break;
          case 3:
            current.classList.add('alive');
            if (green > red && green > blue) {
              current.classList.add('green');
            } else if (red > green && red > blue) {
              current.classList.add('red');
            } else if (blue > green && blue > red) {
              current.classList.add('blue');
            } else {
              let total = red + green + blue
              let redOdds = red/total;
              let blueOdds = blue/total;
              let greenOdds = green/total;
              let diceRoll = Math.random();
              if (diceRoll < redOdds) {
                current.classList.add('red');
              } else if (diceRoll < redOdds + greenOdds) {
                current.classList.add('green');
              } else {
                current.classList.add('blue');
              }
            }
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8: 
            current.classList.remove("alive");
            current.classList.remove("red");
            current.classList.remove("green");
            current.classList.remove("blue");
            break;
          default:
        }
      }

      this.setState({
        interval: myInterval
      })

      this.setState((prevState) => {return {generation: prevState.generation + 1}});
    }, this.state.speed)
  }

  handleClick(event) {
    event.target.classList.toggle("alive");    
  }

  handlePause = () => {
    clearInterval(this.state.interval);
    this.setState({
      running: false
    })
  }

  handleRestart = () => {
    window.location.reload();
  }

  handleFaster = () => {
    clearInterval(this.state.interval);
    clearInterval(this.state.interval);
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {speed: prevState.speed - 50}
    });
    this.handleGo();
    
  }

  handleSlower = () => {
    clearInterval(this.state.interval);
    clearInterval(this.state.interval);
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {speed: prevState.speed + 50}
    });
    this.handleGo();
    
  }

  handleGo = () => {

    this.setState({
      running: true
    })

    const myInterval = setInterval(() => {

    
      for (let i = 1; i < 1601; i++) {

        let current = document.getElementById(i);
        let count = 0;
        let red = 0;
        let green = 0;
        let blue = 0;
        let neighbors = [
          i - 40,
          i - (39),
          i - (41),
          i + 1,
          i - 1,
          i + 40,
          i + 39,
          i + 41];

        if (i <= 40) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 40 && value !== i - 39 && value !== i - 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i >= 1561) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i + 40 && value !== i + 39 && value !== i + 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i === 1) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 1) {
              return true;
            } else {
              return false;
            }
          })
        }

        if ((i - 1) % 40 === 0) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i - 1 && value !== i - 41 && value !== i + 39) {
              return true;
            } else {
              return false;
            }
          })
        }

        if (i % 40 === 0) {
          neighbors = neighbors.filter(function(value) {
            if (value !== i + 1 && value !== i - 39 && value !== i + 41) {
              return true;
            } else {
              return false;
            }
          })
        }

        neighbors.forEach(function(element) {
          if (document.getElementById(element).classList.contains("alive")) {
            count++;
          };
          if (document.getElementById(element).classList.contains("red")) {
            red++;
          };
          if (document.getElementById(element).classList.contains("green")) {
            green++;
          };
          if (document.getElementById(element).classList.contains("blue")) {
            blue++;
          };
           
        })

        switch (count) {
          case 0:
          case 1:
            current.classList.remove("alive");
            current.classList.remove("red");
            current.classList.remove("green");
            current.classList.remove("blue");
            break;
          case 3:
            current.classList.add('alive');
            if (green > red && green > blue) {
              current.classList.add('green');
            } else if (red > green && red > blue) {
              current.classList.add('red');
            } else if (blue > green && blue > red) {
              current.classList.add('blue');
            } else {
              let total = red + blue + green;
              let redOdds = red/total;
              let blueOdds = blue/total;
              let greenOdds = green/total;
              let diceRoll = Math.random();
              console.log(diceRoll, "red" + redOdds, "green" + greenOdds, "blue" + blueOdds)
              if (diceRoll < greenOdds) {
                current.classList.add('green');
                console.log("green wins")
              } else if (diceRoll < redOdds + greenOdds) {
                current.classList.add('red');
                console.log("red wins")
              } else {
                current.classList.add('blue');
                console.log("blue wins")
              }
            }
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8: 
            current.classList.remove("alive");
            current.classList.remove("red");
            current.classList.remove("green");
            current.classList.remove("blue");
            break;
          default:
        }
      }

      this.setState({
        interval: myInterval
      })

      this.setState((prevState) => {return {generation: prevState.generation + 1}});
    }, this.state.speed)
  }

  render() {

    return (
      <div className="App">
        <div className="boundary">
          {this.state.initialize}
        </div>
        <div className="info">
          <h1>Generation: {this.state.generation}</h1>
          <h1>Birth/Death Rate: {this.state.speed} milliseconds</h1>
        </div>
        <div class="speed">
        <button id="slower"onClick={this.handleSlower}>Slower</button>
        <button id="pause"onClick={this.state.running ? this.handlePause : this.handleGo}>Stop/Go</button>
        <button id="faster" onClick={this.handleFaster}>Faster</button>
        <br></br>
        <button id="restart" onClick={this.handleRestart}>Restart</button>
        </div>
        
      </div>
    );
  }
}

export default App;

