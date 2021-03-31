import React, { Component } from 'react';

class App extends Component {

  setMyStorage = () => {
    return (
      document.cookie = "Year=2021",
      localStorage.setItem("Paragon", "yes, but Arena first"),
      sessionStorage.setItem("frontend", "React")
    )
  }

  getMyStorage = () => {
      var myCookieData = document.cookie("year")
      var myLocalStorageData = localStorage.getItem("Paragon")
      var mySessionStorageData = sessionStorage.getItem("frontend")
      return (myLocalStorageData, myCookieData, mySessionStorageData);
      
  }
  render(){
    return (
      <div className="App">
        <button type="button" onclick={this.setMyStorage}>
          Set My Storage
        </button>
        <button type="button" onClick={this.getMyStorage}>
          Get My Storage
        </button>
      </div>
    )
  }
}
export default App;