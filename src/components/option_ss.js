import React from "react";

class OptionSS extends React.Component{
    render(){
        return(
            <div className="finnish-ss">
                <div className="Finnish-picture">
                    <div className="Sity-name">Хельсинки</div>
                    <table className="tags">
                        <tr>
                            <th className="tags-name"># Финский</th>
                            <th className="tags-name"># Познавательно</th>
                        </tr>
                        <tr>
                            <th className="tags-name"># Спортивно</th>
                            <th className="tags-name"></th>
                        </tr>
                    </table>
                </div>
                <div className="Finnish-ss-info">
                    <div className="gorizon-part-flag-1"></div>
                    <div className="vertical-part-flag"></div>
                    <div className="gorizon-part-flag-2"></div>
                    <div className="ss-time">
                        <div className="ss-time-name">Продолжительность</div>
                        <div className="ss-time-long">20 дней</div>
                    </div>
                    <div className="ss-age">
                        <div className="ss-age-name">Возраст участников</div>
                        <div className="ss-age-long">7-10 лет</div>
                    </div>
                    <div className="ss-price">
                        <div className="ss-price-name">Стоимость</div>
                        <div className="ss-price-long">50 000 руб.</div>
                    </div>
                    <div className="ss-text">Много сиротливой тихой грусти в финляндской природе, скорбного одиночества, но нет ни сурового величия, ни пьянящей яркости. Камни, поросшие мхом. Гранитные глыбы. Ельник и сосна. Унылые болота. Бледно-зелёная даль озёр под бледно-зелёным небом. Куда вы ни поедете по Финляндии, вы всюду если и видите какие дары природы, то один лес да камни…
                        <br /><br />Край бедный. Бедный всем, кроме одного. Кроме энергии, упорства в труде. Кроме любви к своей скудной почве.</div>
                    <div className="dates">
                        1-20 июня<br />1-20 июля<br />1-20 августа
                    </div>
                    <div className="available-places">
                        10 мест из 25 доступно<br />10 мест из 25 доступно<br />10 мест из 25 доступно
                    </div>
                    <button className="ss-order">Выбрать</button>
                </div>
            </div>
        );
    }
}

export default OptionSS;
