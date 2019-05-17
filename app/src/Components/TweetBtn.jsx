import React, { Component } from "react";
import AddTweet from "../Layouts/AddTweet";

class TweetBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  TweetShow = e => {
    e.preventDefault();
    this.setState({
      isOpen: true
    });
  };
  render() {
    return (
      <div>
        <div className="tweet-btn-wrapper">
          <button className="tweet-btn" onClick={this.TweetShow}>
            Добавить tweet
          </button>
        </div>
        {!this.state.isOpen ? <AddTweet /> : null}
      </div>
    );
  }
}
export default TweetBtn;
