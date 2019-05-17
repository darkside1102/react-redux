import React from "react";
import AddTweet from "../Layouts/AddTweet";

const Main = props => {
  return (
    <div className="header-bar">
      {props.section === "tweet" ? <AddTweet /> : null}
    </div>
  );
};
export default Main;
