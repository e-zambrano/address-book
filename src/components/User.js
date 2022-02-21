import React, { Component } from "react";
import countryCodeToFlag from "tiny-flag";

export default class User extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const flagEmoji = countryCodeToFlag(this.props.nationality);
    return (
      <div>
        <img
          src={this.props.thumbnail}
          alt={this.props.firstName + "profile"}
        />
        {this.props.firstName} {this.props.lastName}
        <button onClick={this.handleShowDetails}>
          {this.state.showDetails ? "Hide" : "Show"} Details
        </button>
        {this.state.showDetails ? (
          <div>
            {this.props.cell} | {this.props.email} | {flagEmoji}
          </div>
        ) : null}
      </div>
    );
  }
}
