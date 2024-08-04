import React from "react";
import Radium, { StyleRoot } from "radium";
import { slideInLeft, slideInRight, fadeIn } from "react-animations";
import redArrow from "../../../../assets/images/red-arrow-back.png";
import { Link } from "react-router-dom";

const styles = {
  slideInLeft: {
    animationDelay: "3s",
    animation: "x 1s",
    animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
  },
  slideInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInRight, "slideInRight"),
  },
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
const Digital = () => {
  return (
    <StyleRoot>
      <div className="container">
        <div className="row">
          <div className="col-md-12 page-content">
            <Link to="/services">
              <img src={redArrow} className="inverted" />
            </Link>
            <h1 className="page text-white" style={styles.fadeIn}>
              Artificial Intelligence
            </h1>
            <div className="page-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h2 className="page text-white" style={styles.slideInLeft}>
                    State of the Art AI Solutions
                  </h2>
                </div>
                <div className="col-md-5">
                  <p
                    className="quote text-secondary"
                    style={styles.slideInRight}
                  >
                    "Artificial intelligence is the new electricity." <br />–
                    Andrew Ng
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Computer Vision: See the Unseen
                  </h3>
                  <p className="page text-white" style={styles.slideInLeft}>
                    In the fast-paced digital world, capturing attention is
                    crucial. Our AI-powered computer vision technology enables
                    your systems to perceive and understand the visual world,
                    transforming data into actionable insights. With just a
                    glance, we make every interaction count.
                  </p>
                </div>
                <div className="col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Machine Learning: Transform Data into Insights
                  </h3>
                  <p className="page text-white" style={styles.slideInRight}>
                    Leverage the power of machine learning to turn vast amounts
                    of data into meaningful insights. Our machine learning
                    models help you predict trends, optimize processes, and make
                    data-driven decisions, providing you with a competitive edge
                    in an ever-evolving market.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Generative AI: Unleash Creativity
                  </h3>
                  <p className="page text-white" style={styles.slideInLeft}>
                    Unlock new realms of creativity and innovation with
                    generative AI. From crafting unique content and designs to
                    creating personalized user experiences, our generative AI
                    solutions empower you to explore endless possibilities,
                    bringing your ideas to life in ways you never imagined.
                  </p>
                </div>
                <div className="col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Deep Learning: Discover Hidden Patterns
                  </h3>
                  <p className="page text-white" style={styles.slideInRight}>
                    Harness the power of deep learning to uncover complex
                    patterns and relationships in your data. Our deep learning
                    algorithms excel in tasks like image recognition, natural
                    language processing, and predictive analytics, enabling you
                    to gain deeper insights and make more informed decisions.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Reinforcement Learning: Optimize Decision-Making
                  </h3>
                  <p className="page text-white" style={styles.slideInLeft}>
                    Reinforcement Learning (RL) empowers AI to make optimal
                    decisions by learning from interactions and feedback. By
                    receiving rewards or penalties, RL systems refine their
                    strategies over time, excelling in complex environments like
                    autonomous systems and game playing. Our RL solutions drive
                    superior performance and adaptability, enhancing
                    decision-making and operational efficiency.
                  </p>
                </div>
                <div className="col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Chatbots & LLM Integration: Elevate User Interactions
                  </h3>
                  <p className="page text-white" style={styles.slideInRight}>
                    Chatbots and Large Language Models (LLMs) revolutionize user
                    interactions by providing sophisticated, context-aware
                    responses. Our AI-driven chatbots harness LLMs to engage
                    users with natural, intelligent conversations, handle
                    complex queries, and deliver personalized experiences. This
                    integration enhances customer support, automates routine
                    tasks, and scales efficiently, ensuring seamless and
                    meaningful interactions across various platforms.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Augmented Reality: Transform Experiences
                  </h3>
                  <p className="page text-white" style={styles.slideInLeft}>
                    Augmented Reality (AR) brings digital magic to the real
                    world. Our AR solutions layer interactive, virtual elements
                    over your physical environment, making everyday experiences
                    more engaging and immersive. Whether for shopping, learning,
                    or entertainment, we help you captivate and delight with
                    seamless AR experiences.
                  </p>
                </div>
                <div className="col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Virtual Reality: Dive into New Worlds
                  </h3>
                  <p className="page text-white" style={styles.slideInRight}>
                    Virtual Reality (VR) immerses users in entirely new digital
                    environments. Our VR solutions create fully interactive,
                    lifelike experiences that transport users to different
                    worlds. Ideal for training, gaming, or virtual tours, we
                    help you engage and inspire through rich, immersive VR
                    experiences that feel incredibly real.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Robotics: Automate and Innovate
                  </h3>
                  <p className="page text-white" style={styles.slideInLeft}>
                    Robotics combines AI with mechanical systems to automate
                    tasks and enhance capabilities. Our robotics solutions
                    streamline operations, improve precision, and handle complex
                    tasks with ease. Whether for manufacturing, logistics, or
                    service applications, we help you harness the power of
                    robotics to drive efficiency and innovation.
                  </p>
                </div>
                <div className="col-md-5">
                  <h3 className="page text-secondary" style={styles.fadeIn}>
                    Edge AI: Process at the Speed of Need
                  </h3>
                  <p className="page text-white" style={styles.slideInRight}>
                    Edge AI brings intelligence to the edge of your network,
                    allowing real-time data processing directly on devices. Our
                    Edge AI solutions reduce latency and bandwidth usage by
                    performing computations locally, enabling faster
                    decision-making and enhancing performance for applications
                    like IoT, autonomous systems, and real-time analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Digital;
