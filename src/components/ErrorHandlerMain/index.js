import React from "react";
import Button from "../button";
import { Rooms } from "../../constants";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  clearError() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops!, an error has occured, please restart the page</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandler;
