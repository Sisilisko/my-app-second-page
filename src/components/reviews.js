import React from "react";
import photo1 from "../img/photo-1.png";
import photo2 from "../img/photo-2.png";
import photo3 from "../img/photo-3.png";
import left from "../img/left.png";
import right from "../img/right.png";

class Reviews extends React.Component{
    render(){
        return(
            <div className="reviews">
    <div className="students-rev">
        <div className="row">
            <div className="main-line">Отзывы</div>
        </div>
        <div className="row">
            <div className="col-3">
                <div className="photo">
                    <img src={photo1} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu orci, cursus condimentum efficitur et, bibendum sit amet elit. Fusce commodo mi dapibus libero mattis consectetur.</p>
                </div>
            </div>
            <div className="col-1">
                <img src={left} alt="" />
            </div>
            <div className="col-4">
                <div className="photo">
                    <img src={photo2} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu orci, cursus condimentum efficitur et, bibendum sit amet elit. Fusce commodo mi dapibus libero mattis consectetur.</p>
                </div>
            </div>
            <div className="col-1">
                <img src={right} alt="" />
            </div>
            <div className="col-3">
                <div className="photo">
                    <img src={photo3} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu orci, cursus condimentum efficitur et, bibendum sit amet elit. Fusce commodo mi dapibus libero mattis consectetur.</p>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default Reviews;