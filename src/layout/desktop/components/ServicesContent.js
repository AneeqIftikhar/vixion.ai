import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import redArrow from "../../../assets/images/red-arrow.png";
import WordCloud from "./WordCloud";
class ServicesContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3 sub-section">
          <Link to="/services/artificial-intelligence">
            <h2 className="p-0 m-0 sub-heading">
              AI{" "}
              <span>
                <img src={redArrow} />
              </span>
            </h2>
            {/* </Link>
                    <Link to="/services/digital"> */}
            <ul className="service-list">
              <li>Computer Vision</li>
              <li>Machine Learning</li>
              {/* <li>Deep Learning</li>
              <li>Reinforcement Learning</li> */}
              <li>Generative AI</li>
              <li>Chatbots & LLM</li>
              {/* <li>Speech Recognition</li>
              <li>Robotics</li>
              <li>Augmented Reality</li>
              <li>Virtual Reality</li>
              <li>Edge AI</li> */}
            </ul>
          </Link>
        </div>
        <div className="col-md-3 sub-section">
          <Link to="/services/digital">
            <h2 className="p-0 m-0 sub-heading">
              WEB{" "}
              <span>
                <img src={redArrow} />
              </span>
            </h2>

            <ul className="service-list">
              <li>UI/UX design</li>
              <li>Front-end Development</li>
              <li>Back-end Development</li>
              <li>DevOps</li>
            </ul>
          </Link>
        </div>
        <div className="wordcloud col-md-6 sub-section">
          <WordCloud />
        </div>
        {/* <div className="col-md-3 sub-section">
                    <Link to="/services/branding">
                        <h2 className="p-0 m-0 sub-heading">Branding <span><img src={redArrow}/></span></h2>
                    
                        <ul className="service-list">
                            <li>Research & strategy</li>
                            <li>Identity system</li>
                            <li>Naming</li>
                            <li>Packaging Design</li>
                            <li>Publication Design</li>
                            <li>Advertising</li>
                        </ul>
                    </Link>
                </div>
                <div className="col-md-3 sub-section">
                    <Link to="/services/marketing">
                        <h2 className="p-0 m-0 sub-heading">Marketing <span><img src={redArrow}/></span></h2>
                    
                        <ul className="service-list">
                            <li>Research</li>
                            <li>Analytics</li>
                            <li>Strategy</li>
                            <li>Promo Videos</li>
                            <li>Interactive Design</li>
                        </ul>
                    </Link>
                </div> */}
      </div>
    );
  }
}

export default ServicesContent;
