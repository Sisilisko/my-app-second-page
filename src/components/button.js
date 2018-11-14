import React from "react";
import {Link} from "react-router-dom"

class Button extends React.Component{
    render(){
        return(
            <Link to="/" className="button-back">Вернуться на главную страницу</Link>
        );
    }
}

export default Button;

