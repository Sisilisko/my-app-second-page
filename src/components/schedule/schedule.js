import React from "react";
import {connect} from "react-redux";
import {getLessons} from "../../actions/lessons.actions";
import {schTable} from "../../schedule-lessons-table"

class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            schTable: []
        };
        this.time = ["10:00", "11:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
    }

    prepareData = (schTable)=>{
    return schTable.map(el => {
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
            const d = schTable.filter(obj => obj.time === el)
            return (<tr key={index}>
                    <td>{d.filter(r=>r.day === 0).map(r => <div className="Finnish-C">{r.language}</div>)}</td>
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
                            <th></th>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}                 
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