import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import Main from "../Components/Main";

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "tweet"
    };
  }
  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="section">
          <Main section={this.state.section} />
          <Content />
        </div>
      </div>
    );
  }
}

export default Tweets;
