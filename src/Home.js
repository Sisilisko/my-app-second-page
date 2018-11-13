import React, { Component } from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Study_forms from "./components/study_forms";
import Features from "./components/features";
import Reviews from "./components/reviews"

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Header />
            <Slider />
            <Study_forms />
            <Features />
            <Reviews />
            <Footer />
        </div>
    );
  }
}

export default Home;