import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import Header from "./components/header.js";
import Schedule from "./components/schedule/schedule";
import Button from "./components/button";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Schedule />
            <Button />
            <Footer />
        </div>
    );
  }
}

export default App;
