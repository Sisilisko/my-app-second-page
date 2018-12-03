import React from "react";
import {Link} from "react-router-dom"

class Slider extends React.Component{
    render(){
        return(
        <div className="slider">
            <div className="languages">
                <div className="island"><Link to=""><div className="island-flag"></div>íslenska<br />исландский</Link></div>
                <div className="norway"><Link to=""><div className="norway-flag"></div>norsk<br />норвежский</Link></div>
                <div className="swiden"><Link to=""><div className="swiden-flag"></div>svenska<br />шведский</Link></div>
                <div className="denmark"><Link to=""><div className="denmark-flag"></div>dansk<br />датский</Link></div>
                <div className="suomi"><Link to=""><div className="suomi-flag"></div>suomi<br />финский</Link></div>
            </div>
        <div className="responce-button" id="responce-btn">Оставить заявку<br />на обучение</div>
        </div>
        );
    }
}

export default Slider;