import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    this.setState({ hasError: true }); // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
