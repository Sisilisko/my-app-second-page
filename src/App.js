import React, { Component } from 'react';
import Logo from "./img/logo.png";
import './bootstrap.css';
import './App.css';
import header from "./components/header/header.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <div href="" className="logo">
                <div className="logo-pic">
                <img id="rotateImg" src={Logo} alt="logo" />
                </div>
                <div className="name">NORD<br />школа иностранных языков</div>
            </div>
            <nav className="nav">
                <a href="#" className="schedule">Расписание</a>    
                <a href="#" className="paying">Цены</a>
                <a href="#" className="info">О нас</a>
                <a href="#" className="signin">Летняя школа</a>
            </nav>
        </header>
<div className="schedule-season">1 семестр, 2018</div>
<div className="schedule-sheme">
<div className="schedule-name">Расписание</div>
        <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Пн</th>
                    <th scope="col">Вт</th>
                    <th scope="col">Ср</th>
                    <th scope="col">Чт</th>
                    <th scope="col">Пт</th>
                    <th scope="col">Сб</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">10:00</th>
                    <td><div className="Finnish-C">Финский (С)</div></td>
                    <td></td>
                    <td><div className="Finnish-C">Финский (С)</div></td>
                    <td></td>
                    <td></td>
                    <td><div className="Finnish-C">Финский (С)</div></td>
                </tr>
                <tr>
                    <th scope="row">11:00</th>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td><div className="Island-A">Исландский (А)</div></td>
                    <td></td>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td><div className="Island-A">Исландский (А)</div></td>
                    <td><div className="Finnish-C">Финский (С)</div></td>
                </tr>
                <tr>
                    <th scope="row">17:00</th>
                    <td></td>
                    <td></td>
                    <td><div className="Denmark-A">Датский (А)</div></td>
                    <td></td>
                    <td><div className="Denmark-A">Датский (А)</div></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">18:00</th>
                    <td><div className="Sweden-A">Шведский (А)</div></td>
                    <td><div className="Sweden-A">Шведский (А)</div></td>
                    <td><div className="Sweden-A">Шведский (А)</div></td>
                    <td><div className="Sweden-A">Шведский (А)</div></td>
                    <td></td>
                    <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                </tr>
                <tr>
                    <th scope="row">19:00</th>
                    <td><div className="Island-С">Исландский (С)</div></td>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td><div className="Island-С">Исландский (С)</div></td>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td></td>
                    <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                </tr>
                <tr>
                    <th scope="row">20:00</th>
                    <td><div className="Finnish-AB">Финский (A/B)</div></td>
                    <td><div className="Sweden-C">Шведский (C)</div></td>
                    <td><div className="Finnish-AB">Финский (A/B)</div></td>
                    <td><div className="Sweden-C">Шведский (C)</div></td>
                    <td><div className="Sweden-C">Шведский (C)</div></td>
                    <td><div className="Island-С">Исландский (С)</div></td>
                </tr>
                <tr>
                    <th scope="row">21:00</th>
                    <td><div className="Denmark-B">Датский (B)</div></td>
                    <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td><div className="Norwey-A">Норвержский (А)</div></td>
                    <td></td>
                    <td></td>
                </tr>                  
                </tbody>
              </table>
</div>
<a href="index.html" className="button-back">Вернуться на главную страницу</a>
<div className="footer">
        <div className="footer-left">
            <div className="links">
                <div><a href="#">Курсы</a></div>
                <div><a href="#">Расписание</a></div>
                <div><a href="#">Летняя школа</a></div>
                <div><a href="#">Способы оплаты</a></div>
                <div><a href="#">Отзывы</a></div>
            </div>
            <div className="connects">
                <a href="www.facebook.com" className="fb" target="_blank"></a>
                <a href="www.vk.com" className="vk" target="_blank"></a>
                <a href="www.skype.com" className="skype" target="_blank"></a>
                <a href="www.telegram.com" className="telegram" target="_blank"></a>
            </div>
        </div>
        <div className="col_back">
            <div className="f-title">
                Хочешь узнать больше?	
                <div className="f-pre-title">Запишись на открытый урок!</div>				
            </div>
            <div className="form-group">
                        <label className="col-form-label" for="f-nm">Твое имя</label>
                        <input type="text" className="form-control" name="nm" id="nm" />
            </div>
            <div className="form-group">
                        <label className="col-form-label" for="f-ph">Телефон</label>
                        <input type="text" className="form-control" id="ph" name="ph" />
            </div>
            <div className="form-group">
                        <label className="col-form-label" for="f-ml">e-mail</label>
                        <input type="text" className="form-control" id="ml" name="ml" />
            </div>
            <a href="https://trello.com/b/N4dpxK7T/level-up-web-dev-grey-team" className="knowledge-lesson">Записаться</a>
            <div className="rights">
                <small>2018 © Все права защищены</small>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
