import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { Garden } from "../shared/Garden";
import GardenInfo from "./GardenInfo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Garden: GardenInfo,
    };
  }

  render() {
    return <Directory Garden={this.state.Garden} />;
  }
}

export default Main;
