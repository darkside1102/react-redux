import React, { Component } from "react";

class AddTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetName: "",
      tweetText: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  TweetName = e => {
    const {
      target: { value }
    } = e;
    this.setState({ tweetName: value });
  };
  TweetText = e => {
    const {
      target: { value }
    } = e;
    this.setState({ tweetText: value });
  };
  render() {
    const { tweetName, tweetText } = this.state;
    return (
      <div className="add-tweet">
        <div className="add-tweet-wrapper">
          <input
            className="add-name-input"
            type="text"
            placeholder="add tweet name"
            value={tweetName}
            onChange={this.TweetName}
          />
        </div>
        <div className="add-tweet-wrapper">
          <textarea
            className="add-text-input"
            type="text"
            placeholder="add tweet text"
            value={tweetText}
            onChange={this.TweetText}
          />
        </div>
        <button className="add-tweet-button">Add tweet</button>
      </div>
    );
  }
}

export default AddTweet;
