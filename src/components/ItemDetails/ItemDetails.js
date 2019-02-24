import React, { Component } from "react";
import "./ItemDetails.css";
import Spinner from "../Spinner/Spinner";
export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loaded: true
  };
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.ItemId !== prevProps.ItemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({ loaded: true });
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({ item: item, image: getImageUrl(itemId), loaded: false });
    });
  }

  render() {
    const { item, image, loaded } = this.state;
    if (!item) {
      return <span>Select a Item from a list</span>;
    }
    if (loaded) {
      return (
        <div>
          {loaded}
          <Spinner />
        </div>
      );
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="Item-details card">
        <img className="item-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
