import React, { useEffect } from 'react';
import Card from "./components/Card";
import FreeText from "./components/FreeText";
import Loading from "./components/Loading";
import { Button } from "reactstrap";
import { useState } from "react";

function App() {

  const [res, changeRes] = useState([]);
  const [country, ChangeCountry] = useState([]);
  const [val, changeVal] = useState([]);
  const [clickFalse, clickUpdate] = useState([false]);
  const [bool, changeBool] = useState([false]);
  const [noResult, noResultChange] = useState([false]);
  const [loading, setLoading] = useState([]);

  function handleChange(e) {
    var value = e.target.value;
    changeVal(value);
  }

  function onBtnClick(e) {
    ChangeCountry(val);
    clickUpdate(true);
    changeBool(true);
    e.preventDefault();
    setLoading(true);
  }

  useEffect(() => {
    async function getCocktail () {
      try {
        const response = await 
        fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`);
        const data = await response.json();
        if (data) {
          changeRes(data);
          noResultChange(true);
        } 
        else {
          changeRes(null);
        }
        setLoading(false);
      } catch (error) {
          console.log(error);
      } 
    }
    getCocktail();
  }, [{clickFalse}]);

  return (
    <div className="App">
      <strong><h1 style={{ textAlign: "center", marginBottom: 50, marginLeft: 100, 
      marginRight: 100, marginTop: 50 }}>Real Time Corona Meter</h1></strong>
        <div style={{ marginBottom: 50, marginLeft: 100, marginRight: 100, marginTop: 50 }}>
          <form style={{ width: window }}>
            <input type="text" onChange={handleChange} name="searchBox" placeholder="Type in the country name" 
            className="searchBox form-control" 
            style={{ marginBottom: 20 }}></input>
            <Button type="submit" onClick={onBtnClick} className="btn btn-md btn-success form-control" 
            style={{ width: window }}>Search</Button>
          </form>
          { loading && <Loading /> }
        </div>
      { bool === true && noResult === true && loading === false ? 
        <Card cases={res["cases"]} population={res["population"]} 
          tests={res["tests"]} country={res["country"]} active={res["active"]} 
          recovered={res["recovered"]} deaths={res["deaths"]} todayRecovered={res["todayRecovered"]} 
          todayDeaths={res["todayDeaths"]} todayCases={res["todayCases"]} />
      : <FreeText noResults={bool} loading={loading} /> }  
    </div>
  );
}

export default App;
