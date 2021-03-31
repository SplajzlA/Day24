import React, { Component } from 'react';

class App extends Component{

setLocalStorage = () => {
  return localStorage.setItem("Arena", "Selection Month");
}

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>
          Set Local Storage
        </button>
      </div>
    )
  }
}

export default App;