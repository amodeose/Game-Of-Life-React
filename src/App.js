import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    setTimeout(function() {

      for (let i = 0; i < 1601; i++) {

        let current = document.getElementById(i);

        let count = 0;

        let neighbors = [
          i - 40,
          i - (39),
          i - (41),
          i + 1,
          i - 1,
          i + 40,
          i + (40-1),
          i + (40+1)];

        if (i <= 40) {

          neighbors = neighbors.filter(function(value) {

            return value !== i - 40 || i - 39 || i - 41 || i ;

          })
        }

        console.log(neighbors);

        neighbors.forEach(function(element) {

          if (document.getElementById(element).classList.contains("alive")) {
            count++;
          } 

        })

        switch (count) {

          case 0:
          case 1:

            break;
          case 2:
          case 3:

            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8: 

            break;
          default:
        }
      }

    }, 3000)


  }



  handleClick(event) {
    event.target.classList.toggle("alive");    
  }

  render() {

    let boxes = () => {

      let arr = [];

      for (let i = 1; i < 1601; i++) {
        if (i % 12 === 0 || i % 13 === 0 || i % 14 === 0) {
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

