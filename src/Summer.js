import React, { Component } from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer";
import TitleSS from "./components/title_ss";
import OptionSS from "./components/option_ss";
import OrderSS from "./components/order_ss";

class Summer extends Component {
  render() {
    return(
      <div className="Summer-main">
      <Header />
      <TitleSS />
      <OptionSS />
      <OptionSS />
      <OptionSS />
      <OptionSS />
        <div className="pages">1 2 3 4 5 6 7</div>
      <OrderSS />
      <Footer />
      </div>
    );
  };
}

export default Summer;