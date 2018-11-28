import React from "react";
import online from "../img/online.png";
import group from "../img/group.png";
import individ from "../img/individ.png"

class Study_forms extends React.Component{
    render(){
        return(
            <div className="studyng-forms">
            <div className="content">
                <div className="top-line">Формы обучения</div>
                <div className="grid-itm">
                    <img src={online} className="grid-img" alt="online-learning" />
                    <div className="grid-cont">Онлайн-обучение</div>
                </div>
                <div className="grid-itm">
                        <img src={group} className="grid-img" alt="group-learning" />
                        <div className="grid-cont">Занятия в группе</div>
                </div>
                <div className="grid-itm">
                        <img src={individ} className="grid-img" alt="individ-learning" />
                        <div className="grid-cont">Индивидуальные занятия</div>
                </div>
            </div>
       </div>
        );
    }
}

export default Study_forms;