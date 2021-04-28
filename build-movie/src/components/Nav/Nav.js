import React from "react";
import AppBar from "@material-ui/core/AppBar";

import "./_nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <AppBar position="static">
          <h2>{this.props.headding}</h2>
          <p>{this.props.description}</p>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
