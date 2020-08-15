import React, { useState } from "react";


function Card1 (props) {
    return (
        <div className = "card" style = {{margin: 100, marginTop: 10, textAlign: "center"}}>
            <div className = "card-body">
                <div className = "card-title">
                    <h2><strong>{props.country}</strong></h2>
                </div><br/>
                <div className = "card-text">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Population </h3> {props.population}
                        <h3>Number of tests </h3> {props.tests}
                        <h3>Total number of cases </h3> {props.cases}
                    </div>
                    <div className="col-md-4">
                        <h3>Active </h3> {props.active}  
                        <h3>Recovered </h3> {props.recovered}  
                        <h3>Deaths </h3> {props.deaths}  
                    </div>
                    <div className="col-md-4">
                        <h3>New cases today </h3> {props.todayCases}
                        <h3>Recovered today </h3> {props.todayRecovered}  
                        <h3>Deaths today </h3> {props.todayDeaths}  
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Card1