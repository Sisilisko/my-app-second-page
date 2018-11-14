import React, { Component } from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer";
import Title_SS from "./components/title_ss";
import Option_SS from "./components/option_ss";
import Order_SS from "./components/order_ss";

class Summer extends Component {
  render() {
    return(
      <div className="Summer">
      <Header />
      <Title_SS />
      <Option_SS />
      <Option_SS />
      <Option_SS />
      <Option_SS />
        <div className="pages">1 2 3 4 5 6 7</div>
      <Order_SS />
      <Footer />
      </div>
    );
  };
}

export default Summer;