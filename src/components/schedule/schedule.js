import React from "react";
import {connect} from "react-redux";
import {getLessons} from "../../actions/lessons.actions";
import {schTable} from "../../schedule-lessons-table.js"

class Schedule extends React.Component{

    constructor(props){
        super(props);
        this.state = {schTable: schTable};
        this.time = ['10:00', '11:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
        this.day = [0, 1, 2, 3, 4, 5];
    }

    btnClickFinnish = (event) => {
        this.setState({schTable: schTable.filter(obj1 => obj1.language === "Финский")})
    };
    btnClickIcelandic = (event) => {
        this.setState({schTable: schTable.filter(obj1 => obj1.language === "Исландский")})
    };
    btnClickSwedish = (event) => {
        this.setState({schTable: schTable.filter(obj1 => obj1.language === "Шведский")})
    };
    btnClickDanish = (event) => {
        this.setState({schTable: schTable.filter(obj1 => obj1.language === "Датский")})
    };
    btnClickNorwegian = (event) => {
        this.setState({schTable: schTable.filter(obj1 => obj1.language === "Норвежский")})
    };
    btnClickAllLessons = (event) => {
        this.setState({schTable: schTable})
    };
    // prepareData = (schTable) => {
    // return schTable.map(el => {
    //         const lesson = { ...el };
    //         lesson.day = new Date(el.day).getDay();
    //         console.log(lesson);
    //         return lesson;
    //     });
    // }

    getLessonByTime = (schTable, time)=>{
        const arr2 = schTable.filter(el=>{
            return el.time === time
        })
        return arr2
    }
  
    render(){
        // let schTable = []
        // if (this.state.lesson === ""){
        //     let schTable = this.prepareData(this.props.lessons);
        // } else {
        //     schTable = this.prepareData(this.props.lessons.filter(el=>el.lesson === this.state.lesson))
        // }
        // const schTable = this.prepareData(this.props.lessons);
        // const {btnClickAllLessons, btnClickNorwegian, btnClickSwedish, btnClickDanish, btnClickIcelandic, btnClickFinnish} = this.props;
        // const {data} = this.props;

        const { lessons } = this.props;
        const data = this.time.map((el, index) =>{
            const d = this.state.schTable.filter(obj => obj.time === el);
            return (<tr key={index}>
                    <td>{el}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 0).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 1).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 2).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 3).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 4).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                    <td className="tableElement">{d.filter(r=>r.day === 5).map((r, index) => <div key={index} className="Finnish-C">{r.language}</div>)}</td>
                </tr>);
        })
        return(
            <div>
            <div className="schedule-season">1 семестр, 2018</div>
            <div className="schedule-sheme">
                <div className="schedule-name">Расписание</div>
                <div className="schedule-both">
                <table className="table table-striped">
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
                <div className="Norwegian" onClick={this.btnClickNorwegian} data={lessons}>Норвержский</div>
                <div className="Danish" onClick={this.btnClickDanish}>Датский</div>
                <div className="Swedish" onClick={this.btnClickSwedish}>Шведский</div>
                <div className="Icelandic" onClick={this.btnClickIcelandic}>Исландский</div>
                <div className="Finish" onClick={this.btnClickFinnish}>Финский</div>
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