import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import Main from "../Components/Main";

class Profile extends Component {
  render() {
    const sayHello = "Hello, admin";
    return (
      <div className="main">
        <NavBar />
        <div className="section">
          <Main section="profile" />
          <Content content={sayHello} />
        </div>
      </div>
    );
  }
}
export default Profile;
