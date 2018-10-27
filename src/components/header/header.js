import React from "react";
import "../../bootstrap.css";
import "../../App.css";
import Logo from "../../img/logo.png";

class header extends React.Component{
    render(){
        return(
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
        )
    }
}

export default header