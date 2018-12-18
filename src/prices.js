import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import Header from "./components/header.js";
import Button from "./components/button";
import Footer from "./components/footer";

class Price extends Component {
  render() {
    return (
        <div className="Price">
            <Header />
            <div className="title_price">Скоро здесь будут цены! :) </div>
            <Button />
            <Footer />
        </div>
    );
  }
}

export default Price;