import React from "react";
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"

function Card (props) {
    return (
        <div>
            {props.country ? <Card1 cases={props.cases} population={props.population} tests={props.tests} country={props.country} active={props.active} recovered={props.recovered} todayRecovered={props.todayRecovered} deaths={props.deaths} todayDeaths={props.todayDeaths} todayCases={props.todayCases} /> : <Card2 />}
        </div>
        
    )
}

export default Card;