import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import SwapiService from "../../services/SwapiServices";
import "./RandomPlanet.css";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updatePlanet();
  }
  onError = err => {
    this.setState({ loading: false, error: true });
  };
  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false, error: false });
  };

  updatePlanet() {
    const id = 10;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;

    const planetView =
      !loading && !error ? <PlanetView planet={planet} /> : null;
    const errorView = error ? <ErrorIndicator /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {errorView}
        {planetView}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt=""
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
