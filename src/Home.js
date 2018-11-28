import React, { Component } from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer";
import Slider from "./components/slider";
import StudyForms from "./components/study_forms";
import Features from "./components/features";
import Reviews from "./components/reviews";
import BtnBackToTop from "./components/btn-back-to-top"

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Header />
            <Slider />
            <BtnBackToTop />
            <StudyForms />
            <Features />
            <Reviews />
            <Footer />
        </div>
    );
  }
}

export default Home;