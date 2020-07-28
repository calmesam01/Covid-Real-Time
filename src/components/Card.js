import React from "react";

function Card (props) {
    return (
        <div className = "card" style = {{margin: 100, textAlign: "center"}}>
            <img src = "https://picsum.photos/200/200" style = {{width: 200, height: 200}} className = "card-img-top"></img>
            <div className = "card-body">
                <div className = "card-title">
                    {props.country}
                </div>
                <div className = "card-text">
                <h3>Total number of cases: </h3> {props.cases}
                <h3>Number of active cases: </h3> {props.active}
                </div>
            </div>
        </div>
    )
}

export default Card;