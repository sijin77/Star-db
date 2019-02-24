import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemDetails from "../ItemDetails";
import SwapiService from "../../services/SwapiServices";
import Row from "../Row/Row";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

export default class App extends Component {
  state = {
    showRandomPlanet: true
  };
  onPersonSelected = id => {
    this.setState({
      selectedPerson: 3
    });
  };
  swapiService = new SwapiService();
  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const {
      getPerson,
      getPlanet,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={7}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    const planetDetails = (
      <ItemDetails
        itemId={5}
        getData={getPlanet}
        getImageUrl={getStarshipImage}
      />
    );
    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <div>
          <ErrorBoundry>
            <Row left={personDetails} right={planetDetails} />
          </ErrorBoundry>
        </div>
      </div>
    );
  }
}
