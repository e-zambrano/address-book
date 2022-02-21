import axios from "axios";
import React, { Component } from "react";
import User from "./User";

export default class UserList extends Component {
  state = { users: [] };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api?results=25")
      .then((response) => this.setState({ users: response.data.results }));
  }

  render() {
    return this.state.users.map((user) => (
      <>
        <User
          firstName={user.name.first}
          lastName={user.name.last}
          thumbnail={user.picture.thumbnail}
          cell={user.cell}
          email={user.email}
          nationality={user.nat}
        />
        <hr />
      </>
    ));
  }
}
