import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-left">
                    <div className="links">
                        <div><Link to="/about_us">О нашей школе</Link></div>
                        <div><Link to="/schedule">Расписание</Link></div>
                        <div><Link to="/summer_school">Летняя школа</Link></div>
                        <div><a href="/#reviews-link">Отзывы</a></div>
                    </div>
                <div className="connects">
                    <a href='https://ru-ru.facebook.com/' className="fb" target="_blank" title="Facebook" rel="noopener noreferrer">&nbsp;</a>
                    <a href='https://www.vk.com' className="vk" target="_blank" title="ВКонтакте" rel="noopener noreferrer">&nbsp;</a>
                    <a href='https://www.skype.com' className="skype" target="_blank" title="Skype" rel="noopener noreferrer">&nbsp;</a>
                    <a href='https://www.telegram.com' className="telegram" target="_blank" title="Telegram" rel="noopener noreferrer">&nbsp;</a>
                </div>
            </div>
            <div className="col_back">
                <div className="f-title">Хочешь узнать больше?	
                    <div className="f-pre-title">Запишись на открытый урок!</div></div>
                <div className="form-group">
                    <label className="col-form-label">Твое имя</label>
                    <input type="text" className="form-control" name="nm" id="nm" />
                </div>
                <div className="form-group">
                    <label className="col-form-label">Телефон</label>
                    <input type="text" className="form-control" id="ph" name="ph" />
                </div>
                <div className="form-group">
                    <label className="col-form-label">e-mail</label>
                    <input type="text" className="form-control" id="ml" name="ml" />
                </div>
                    <a href="/#reviews-link" className="knowledge-lesson">Записаться</a>
                    <div className="rights">
                    <small>2018 © Все права защищены</small>
                </div>
            </div>
        </div>
        );
    }
}
        
export default Footer;