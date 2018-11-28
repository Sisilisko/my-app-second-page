import React from "react";
import Logo from "../img/logo.png";
import {Link} from "react-router-dom"

class Header extends React.Component{
    render(){
        return(
        <div className="header">
            <div href="" className="logo">
                <div className="logo-pic">
                <img id="rotateImg" src={Logo} alt="logo" />
                </div>
                <Link to="/" className="link-name" title="На главную"><div className="name">NORD<br />школа иностранных языков</div></Link>
            </div>
            <nav className="nav">
                <Link to="/schedule/" className="/schedule">Расписание</Link>
                <a href="/prices/" className="paying">Цены</a>
                <a href="/about_us/" className="info">О нас</a>
                <Link to="/summer_school/" className="signin">Летняя школа</Link>
            </nav>
        </div>
        );
    }
}

export default Header;