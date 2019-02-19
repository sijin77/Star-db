import React from "react";
import "./App.css";
import PersonDetails from "../PersonDetails";
import ItemList from "../ItemList";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";

const App = props => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
