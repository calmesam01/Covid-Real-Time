import React, { useEffect } from 'react';
import Card from "./components/Card";
import { Button } from "reactstrap";
import { useState } from "react";

function App() {

  const [res, changeRes] = useState([]);
  const [country, ChangeCountry] = useState([]);
  const [val, changeVal] = useState([]);
  const [clickFalse, clickUpdate] = useState([false]);

  function handleChange(e) {
    var value = e.target.value;
    changeVal(value);
  }

  function onBtnClick(e) {
    ChangeCountry(val);
    clickUpdate(true);
    e.preventDefault();
  }

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`)
      .then(response => response.json())
      .then(resp => changeRes(resp))
      .catch(err => console.log(err)
      );
  }, [{clickFalse}]);

  return (
    <div className="App">
    <strong><h1 style={{ textAlign: "center", marginBottom: 50, marginLeft: 100, marginRight: 100, marginTop: 50 }}>Real Time Corona Meter</h1></strong>
      <div style={{ marginBottom: 50, marginLeft: 100, marginRight: 100, marginTop: 50 }}>

        <form style={{ width: window }}>
          <input type="text" onChange={handleChange} name="searchBox" placeholder="Type in the country name" className="searchBox form-control" style={{ marginBottom: 20 }}></input>
          <Button type="submit" onClick={onBtnClick} className="btn btn-md btn-success form-control" style={{ width: window }}>Search</Button>
        </form>
      </div>
      <Card cases={res["cases"]} population={res["population"]} tests={res["tests"]} country={res["country"]} active={res["active"]} recovered={res["recovered"]} deaths={res["deaths"]} todayRecovered={res["todayRecovered"]} todayDeaths={res["todayDeaths"]} todayCases={res["todayCases"]} />
    </div>
  );
}

export default App;
