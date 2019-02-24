import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemDetails from "../ItemDetails";
import ItemList from "../ItemList";
import SwapiService from "../../services/SwapiServices";
import Row from "../Row/Row";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3
  };
  swapiService = new SwapiService();
  componentDidMount = () => {
    console.log("PeoplePage mounted");
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    );
    const personDetails = <ItemDetails personId={this.state.selectedPerson} />;

    return <Row left={itemList} right={personDetails} />;
  }
}
