import React from "react";
import houses from "../img/houses.png";
import sign1 from "../img/sign1.png";
import sign2 from "../img/sign2.png";
import sign3 from "../img/sign3.png";
import sign4 from "../img/sign4.png";


class Features extends React.Component{
    render(){
        return(
            <div className="features">
            <img src={houses} className="img-features" />
            <div className="pluses">
                <div className="row">
                    <div className="col-sm">
                        Почему мы?
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"><img src={sign1} /></div>
                    <div className="col-10">у  нас только квалифицированные преподаватели с большим опытом</div>
                </div>
                <div className="row">
                    <div className="col-2"><img src={sign2} /></div>
                    <div className="col-10">уютные аудитории расположены в центре города</div>
                </div>
                <div className="row">
                    <div className="col-2"><img src={sign3} /></div>
                    <div className="col-10">подготовка к экзаменам на получение гражданства</div>
                </div>
                <div className="row">
                    <div className="col-2"><img src={sign4} /></div>
                    <div className="col-10">ежегодное закрепление полученных знаний в летних школах</div>
                </div>
            <a href="https://trello.com/b/N4dpxK7T/level-up-web-dev-grey-team" className="knowledge-botton">Узнать больше о школе</a>
            </div>
        </div>
        );
    }
}

export default Features;