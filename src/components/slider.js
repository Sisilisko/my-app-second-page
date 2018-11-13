import React from "react";

class Slider extends React.Component{
    render(){
        return(
        <div className="slider">
            <div className="languages">
                <div classNameName="island"><a href=""><div className="island-flag"></div>íslenska<br />исландский</a></div>
                <div className="norway"><a href=""><div className="norway-flag"></div>norsk<br />норвежский</a></div>
                <div className="swiden"><a href=""><div className="swiden-flag"></div>svenska<br />шведский</a></div>
                <div className="denmark"><a href=""><div className="denmark-flag"></div>dansk<br />датский</a></div>
                <div className="suomi"><a href=""><div className="suomi-flag"></div>suomi<br />финский</a></div>
            </div>
        <a className="responce-button" id="responce-btn">Оставить заявку<br />на обучение</a>
        </div>
        );
    }
}

export default Slider;