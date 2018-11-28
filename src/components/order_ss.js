import React from "react";
import viking from "../img/viking.png"

class Order_SS extends React.Component{
    render(){
        return(
            
            <div className="order-summer-school">
            <img src={viking} className="viking" alt="viking" />
                <div className="form-group-ss">
                    <div className="order-ss-name">Не смогли выбрать подходящий вариант?<br />
                            Оставьте свои данные, и мы обязательно поможем!</div>
                    <div className="form-name-cont"><input type="text" className="form-name-ss" placeholder="Ваше имя" />
                    <input type="text" className="form-contacts-ss" placeholder="Контатные данные" /></div>
                    <textarea type="text" className="form-message-ss" placeholder="Пожелания к туру"></textarea>
                </div>
                <button className="ss-text-order">Отравить</button>
            </div>
        );
    }
}

export default Order_SS;