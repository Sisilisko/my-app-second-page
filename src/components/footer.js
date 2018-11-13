import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-left">
                    <div className="links">
                        <div><a href="#">Курсы</a></div>
                        <div><a href="#">Расписание</a></div>
                        <div><a href="#">Летняя школа</a></div>
                        <div><a href="#">Способы оплаты</a></div>
                        <div><a href="#">Отзывы</a></div>
                    </div>
                <div className="connects">
                    <a href="www.facebook.com" className="fb" target="_blank"></a>
                    <a href="www.vk.com" className="vk" target="_blank"></a>
                    <a href="www.skype.com" className="skype" target="_blank"></a>
                    <a href="www.telegram.com" className="telegram" target="_blank"></a>
                </div>
            </div>
            <div className="col_back">
                <div className="f-title">Хочешь узнать больше?	
                    <div className="f-pre-title">Запишись на открытый урок!</div></div>
                <div className="form-group">
                    <label className="col-form-label" for="f-nm">Твое имя</label>
                    <input type="text" className="form-control" name="nm" id="nm" />
                </div>
                <div className="form-group">
                    <label className="col-form-label" for="f-ph">Телефон</label>
                    <input type="text" className="form-control" id="ph" name="ph" />
                </div>
                <div className="form-group">
                    <label className="col-form-label" for="f-ml">e-mail</label>
                    <input type="text" className="form-control" id="ml" name="ml" />
                </div>
                    <a href="https://trello.com/b/N4dpxK7T/level-up-web-dev-grey-team" className="knowledge-lesson">Записаться</a>
                    <div className="rights">
                    <small>2018 © Все права защищены</small>
                </div>
            </div>
        </div>
        );
    }
}
        
export default Footer;