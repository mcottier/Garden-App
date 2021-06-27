import React, { Component } from "react";
import Directory from "./DirectoryComponent";
<<<<<<< HEAD
import { Garden } from "../shared/Garden";
=======
import { Garden } from "../shared/Garden";
>>>>>>> d8597ff60ebcd29f82a402efbdb50821be203060
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
