import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

/*
  componentDidMount() {

    setTimeout(function() {

      

    for (let i = 0; i < 1601; i++) {

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

      if (document.getElementById(i)) {
        
      }

     
    }

  }, 3000)

  }

*/

handleClick(event) {
 
    event.target.classList.toggle("alive");
    
    
}

  render() {

    

    let boxes = () => {

      let arr = [];

      for (let i = 1; i < 1601; i++) {

        arr.push(<div className={"cell"} key={i} onClick={this.handleClick} id={i}></div>);
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

