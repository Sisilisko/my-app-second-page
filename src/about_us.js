import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import Header from "./components/header.js";
import Button from "./components/button";
import Footer from "./components/footer";
import Helsinki from "./img/helsinki.png";
import OurSchool from "./img/group.png"

class About_us extends Component {
  render() {
    return (
        <div className="About_us">
            <Header />
            <div className="School_repr">
            <div><div className="TitleOurschool">О школе NORD</div><div className="text-about-school">Скандинавская Школа была открыта 18.08.2000г. Проект получил первичное финансирование благодаря гранту действующего на тот момент Совета Министров Северных стран, в чьи функции входили, в частности, поддержка, развитие и распространение северных языков и культуры.<br /><br />В первый же год нашей работы были открыты несколько групп по изучению иностранных языков, организованы лингвистические стажировки в Финляндию для слушателей курсов, школа стала активным участником и партнером общественной организации «Северная Столица» по организации образовательных выставок в Санкт-Петербурге.
<br /><br />Мы установили контакты с десятками колледжей в Финляндии и Швеции, благодаря этому была разработана и реализована программа «Отдых+обучение» для школьников в период каникул. Несколькими годами позже наши теплые деловые отношения с образовательными организациями Испании позволили организовать новую международную программу «Из северной Европы в Южную».</div></div>
            <img src={Helsinki} className="Hels" alt="tuomiokirkko" />
            <img src={OurSchool} className="OurSchool" alt="out-school" />
            </div>
            <Button />
            <Footer />
        </div>
    );
  }
}

export default About_us;