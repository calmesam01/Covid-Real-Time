import React from 'react';
import Card from "./components/Card";
import { Button } from "reactstrap";
import { useState, useEffect } from "react";

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
      .then(res => changeRes(res))
      .catch(err => console.log(err)
      )
  }, [{clickFalse}]);

  return (
    <div className="App">
      <div style={{ margin: 100 }}>
        <form style={{ width: window }}>
          <input type="text" onChange={handleChange} name="searchBox" placeholder="Type in the country name" className="searchBox form-control" style={{ marginBottom: 20 }}></input>
          <Button type="submit" onClick={onBtnClick} className="btn btn-md btn-success form-control" style={{ width: window }}>Search</Button>
        </form>
      </div>
      <Card cases={res["cases"]} country={res["country"]} active={res["active"]} />
    </div>
  );
}

export default App;
