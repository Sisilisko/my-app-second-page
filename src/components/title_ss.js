import React from "react";
import sport from "../img/sport.png";
import house from "../img/house.svg";
import shoes from "../img/shoes.png";
import camera from "../img/camera.png"


class Title_SS extends React.Component{
    render(){
        return(
            <div>
            <div className="title-sum-school">Летняя школа для детей</div>
            <table className="advantage-sum-school">
            <tbody>
                <tr>
                    <th className="adv-ss"><div className="ss-img"><img src={sport} className="img-pic" alt="sport" /></div></th>
                    <th className="adv-ss-text">организационные моменты продуманы<br /> и не требуют Вашего внимания</th>
                    <th className="adv-ss"><div className="ss-img"><img src={house} className="img-pic" alt="house" /></div></th>
                    <th className="adv-ss-text">различные варианты проживания</th>
                </tr>
                <tr>
                    <th className="adv-ss"><div className="ss-img"><img src={shoes} className="img-pic" alt="shoes" /></div></th>
                    <th className="adv-ss-text">новые незабываемые впечатления и знакомства</th>
                    <th className="adv-ss"><div className="ss-img"><img src={camera} className="img-pic" alt="camera" /></div></th>
                    <th className="adv-ss-text">незабываемые впечатления</th>
                </tr>
            </tbody>
            </table>
            </div>
        );
    };
}

export default Title_SS;