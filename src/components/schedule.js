import React from "react"

class schedule extends React.Component{
    render(){
        return(
            <div className="schedule-season">1 семестр, 2018</div>
            <div className="schedule-sheme">
                <div className="schedule-name">Расписание</div>
                <table className="table table-striped">
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
                    <tr>
                        <th scope="row">10:00</th>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                        <td></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                        <td></td>
                        <td></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                    </tr>
                    <tr>
                        <th scope="row">11:00</th>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-A">Исландский (А)</div></td>
                        <td></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-A">Исландский (А)</div></td>
                        <td><div className="Finnish-C">Финский (С)</div></td>
                    </tr>
                    <tr>
                        <th scope="row">17:00</th>
                        <td></td>
                        <td></td>
                        <td><div className="Denmark-A">Датский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-A">Датский (А)</div></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">18:00</th>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td><div className="Sweden-A">Шведский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                    </tr>
                    <tr>
                        <th scope="row">19:00</th>
                        <td><div className="Island-С">Исландский (С)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td><div className="Island-С">Исландский (С)</div></td>
                        <td><div className="Norwey-A">Норвержский (А)</div></td>
                        <td></td>
                        <td><div className="Denmark-Int">Датский (интенсив)</div></td>
                    </tr>
                    <tr>
                        <th scope="row">20:00</th>
                        <td><div className="Finnish-AB">Финский (A/B)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Finnish-AB">Финский (A/B)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Sweden-C">Шведский (C)</div></td>
                        <td><div className="Island-С">Исландский (С)</div></td>
                    </tr>
                    <tr>
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
            </div>    
        )
    }
}