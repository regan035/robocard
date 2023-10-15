import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// using {}destructure for non-export default
import { robots } from "./robots";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    //set state for search field
    this.setState({ searchfield: event.target.value });
  };

  render() {
    //filter robots matches with input field
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />;
      </div>
    );
  }
}

export default App;
