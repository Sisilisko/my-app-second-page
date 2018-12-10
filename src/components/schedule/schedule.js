import React from "react";
import {connect} from "react-redux";
import {getLessons} from "../../actions/lessons.actions";
import {schTable} from "../../schedule-lessons-table"

class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {schTable: [{
            id: '',
            language: '',
            time: '',
            date: '',
            level: '',
        }]
    };
        this.time = ["10:00", "11:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
    }

    prepareData = (schTable)=>{
        const arr1 = schTable.map(el => {
            const lesson = { ...el };
            lesson.dayWeek = new Date(el.date).getDay();
            return lesson;
        });
    }

    getLessonByTime = (schTable, time)=>{
        const arr2 = schTable.filter(el=>{
            return el.time === time
        })
        return arr2
    }
    // btnClickNorwegian = () => {
    //     console.log("hi"); 
    //     this.props.getLessons();
    //     if (this.state.language === 'Norwegian') {
    //     
    //     }
    // }  
    render(){
        const schTable = this.prepareData(this.props.lessons);
        // const {btnClickAllLessons, btnClickNorwegian, btnClickSwedish, btnClickDanish, btnClickIcelandic, btnClickFinnish} = this.props;
        // const {data} = this.props;

        const { lessons, getLessons, removeLanguage } = this.props;
        const data = this.time.map((el, index) =>{
            // const d = schTable.filter(obj=> obj.time === el)
            return (<tr key={index}>
                    <td>{el}</td>
                    <td>{el}</td>
                    <td>{el}</td>
                    <td>{el}</td>
                    <td>{el}</td>
                    <td>{el}</td>
                    <td>{el}</td>
                </tr>);
        })
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