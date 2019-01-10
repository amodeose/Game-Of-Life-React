import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    const myInterval = setInterval(function() {

      for (let i = 1; i < 1601; i++) {

        let current = document.getElementById(i);

        let count = 0;

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
          } 

        })

        switch (count) {

          case 0:
          case 1:
            current.classList.remove("alive");
            break;
          case 3:
            current.classList.add('alive');
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8: 
            current.classList.remove("alive");
            break;
          default:
        }
      }

    }, 500)


  }



  handleClick(event) {
    event.target.classList.toggle("alive");    
  }

  render() {

    let boxes = () => {

      let arr = [];

      for (let i = 1; i < 1601; i++) {
        let odds = Math.random();
        if (odds > 0.9) {
          arr.push(<div className={"cell alive"} key={i} onClick={this.handleClick} id={i}></div>);
        } else {
          arr.push(<div className={"cell"} key={i} onClick={this.handleClick} id={i}></div>);
        }
      }

      return arr;

    }


    return (
      <div className="App">
        <div className="boundary">
          {boxes()}
        </div>
      </div>
    );
  }
}

export default App;

