import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {

    setTimeout(function() {

      

    for (let i = 0; i < 101; i++) {

      let neighbors = [
        i - 10,
        i - (10-1),
        i - (10 +1),
        i + 1,
        i - 1,
        i + 10,
        i + (10-1),
        i + (10+1)
      ];

      for (let i = 0; i < neighbors.length; i++);

      let current = document.getElementById(i);

      if (document.getElementById(i).) {
        current.style.backgroundColor = "purple";
      }
    }

  }, 3000)

  }


  render() {

    let boxes = () => {

      let arr = [];

      for (let i = 1; i < 101; i++) {

        let status;

        if (i % 3 == 0) {
          status = "alive";
        } else {
          status = "dead";
        }

        arr.push(<div className={"cell " + status} id={i}>{i}</div>);
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
