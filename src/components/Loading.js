import React from "react";
import loading from "../static/images/loading.gif";

function Loading () {
    return (
    <div>
        <center><img src= {loading} style={{height: 200, width: 250, margin: 20}}></img></center>       
    </div>
    );
}

export default Loading;