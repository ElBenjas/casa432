import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import We from "./We";
import Contact from "./Contact";


class Main extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/we">We</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/we" component={We} />
              <Route path="/contact" component={Contact} />
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
