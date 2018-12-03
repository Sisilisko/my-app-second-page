import React from "react";
import {connect} from "react-redux";
import {getLessons} from "../../actions/lessons.actions";
import {schTable} from "../../schedule-lessons-table"

class Schedule extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {schTable};
    }

    btnClickNorwegian = () => {
        console.log("hi"); 
        this.props.getLessons();
        if (this.state.language === 'Norwegian') {
            console.log('bye');
        }
    }

    removeLanguage = Finish => {
        const { language } = this.state;
    
        this.setState({
            lessons: language.filter((language, i) => { 
                return i !== Finish;
            })
        });
    }


    render(){
        // const {btnClickAllLessons, btnClickNorwegian, btnClickSwedish, btnClickDanish, btnClickIcelandic, btnClickFinnish} = this.props;
        // const {data} = this.props;
        const { lessons, getLessons, removeLanguage } = this.props;
        return(
            <div>
            <div className="schedule-season">1 семестр, 2018</div>
            <div className="schedule-sheme">
                <div className="schedule-name">Расписание</div>
                <div className="schedule-both">
                <table className="table table-striped" data={schTable}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Пн</th>
                            <th scope="col">Вт</th>
                            <th scope="col">Ср</th>
                            <th scope="col">Чт</th>
                            <th scope="col">Пт</th>
                            <th scope="col">Сб</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr date="10:00">
                        <th scope="row" key="10:00">10:00</th>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                        <td></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                        <td></td>
                        <td></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                    </tr>
                    <tr date="11:00">
                        <th scope="row">11:00</th>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-A">Исландский (А)</div></td>
                        <td></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-A">Исландский (А)</div></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                    </tr>
                    <tr date="17:00">
                        <th scope="row">17:00</th>
                        <td></td>
                        <td></td>
                        <td><div className="Denmark-A">Датский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-A">Датский (А)</div></td>
                        <td></td>
                    </tr>
                    <tr date="18:00">
                        <th scope="row">18:00</th>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                    </tr>
                    <tr date="19:00">
                        <th scope="row">19:00</th>
                        <td><div className="Island-С">Исландский (С)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-С">Исландский (С)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                    </tr>
                    <tr date="20:00">
                        <th scope="row">20:00</th>
                        <td><div className="Finnish-AB">Финский (A/B)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Finnish-AB">Финский (A/B)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Island-С">Исландский (С)</div></td>
                    </tr>
                    <tr date="21:00">
                        <th scope="row">21:00</th>
                        <td><div className="Denmark-B">Датский (B)</div></td>
                        <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td></td>
                        <td></td>
                    </tr>                  
                    </tbody>
                </table>
            <div className="schedule-menu">
                <div className="all-lessons" onClick={this.btnClickAllLessons}>Все занятия</div>
                <div className="Norwegian" onClick={this.btnClickNorwegian} data={lessons} click={getLessons}>Норвержский</div>
                <div className="Danish" onClick={this.btnClickDanish}>Датский</div>
                <div className="Swedish" onClick={this.btnClickSwedish}>Шведский</div>
                <div className="Icelandic" onClick={this.btnClickIcelandic}>Исландский</div>
                <div className="Finish" onClick={this.btnClickFinnish} click={removeLanguage}>Финский</div>
            </div>
            </div>
            </div>
            </div> 
        );
    }
}

export default connect((state) => {
    return {
        lessons: state.lessons,
    };
}, (dispatch) => {
return{
    getLessons: ()=>{
        getLessons(dispatch)
    }
}
})(Schedule);