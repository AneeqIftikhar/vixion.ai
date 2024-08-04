import React, { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  useLocation,
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../../Slider.css";

import About from "./pages/about/About";
import Mobile from "./pages/services/Mobile";
import Branding from "./pages/services/Branding";
import Marketing from "./pages/services/Marketing";
import Digital from "./pages/services/Digital";
import AlArabyTV from "./pages/cases/AlArabyTV";
import SportsAnalytics from "./pages/cases/SportsAnalytics";
import DesktopHome from "./DesktopHome";
import DesktopHeader from "./DesktopHeader";
import DesktopFooter from "./DesktopFooter";
import AI from "./pages/services/ai";

import sample from "../../assets/images/sample.jpg";

// import bigBlackDot from '../../assets/images/big-black-dot.png';
// import smallBlackDot from '../../assets/images/small-black-dot.png';
// import madDot from '../../assets/images/bouncingdot.png';

export default function WindowsRoutes(props) {
  console.log("Windows");
  return (
    <Router>
      <div>
        <DesktopHeader isMobile={props.isMobile} />
        <AnimationApp isMobile={props.isMobile}></AnimationApp>
        <DesktopFooter />
      </div>
    </Router>
  );
}

function AnimationApp(props) {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="example" timeout={300}>
        <Switch>
          <Route path="/about">
            <About isMobile={props.isMobile} />
          </Route>

          {/* Cases Pages */}
          <Route path="/cases/al-araby-tv">
            <AlArabyTV isMobile={props.isMobile} />
          </Route>
          <Route path="/cases/sports-analytics">
            <SportsAnalytics isMobile={props.isMobile} />
          </Route>

          {/* Services Pages */}
          <Route path="/services/artificial-intelligence">
            <AI isMobile={props.isMobile} />
          </Route>
          <Route path="/services/digital">
            <Digital isMobile={props.isMobile} />
          </Route>
          <Route path="/services/mobile">
            <Mobile isMobile={props.isMobile} />
          </Route>
          <Route path="/services/branding">
            <Branding isMobile={props.isMobile} />
          </Route>
          <Route path="/services/marketing">
            <Marketing isMobile={props.isMobile} />
          </Route>
          <Route path="/sample/digital">
            <img src={sample} />
          </Route>
          {/* Home Page */}
          <Route path="/:section">
            <DesktopHome isMobile={props.isMobile} />
          </Route>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: "/home",
                state: { from: "/" },
              }}
            />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
