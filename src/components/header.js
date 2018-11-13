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
                <div className="name">NORD<br />школа иностранных языков</div>
            </div>
            <nav className="nav">
                <Link to="/schedule" className="/schedule">Расписание</Link>
                <a href="#" className="paying">Цены</a>
                <a href="#" className="info">О нас</a>
                <a href="#" className="signin">Летняя школа</a>
            </nav>
        </div>
        );
    }
}

export default Header;