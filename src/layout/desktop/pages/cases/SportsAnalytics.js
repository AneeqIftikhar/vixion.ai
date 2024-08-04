import React from 'react';
import Video from '../../../../assets/videos/sportsanalytics.mp4'
import Case1 from '../../../../assets/images/cases/case-2-1.png';
import Case2 from '../../../../assets/images/cases/case-2-2.png';
import Case3 from '../../../../assets/images/cases/case-2-3.png';
import Radium , {StyleRoot} from 'radium';
import { slideInLeft, slideInRight, fadeIn } from 'react-animations';

const styles = {
    slideInLeft: {
        animationDelay: '3s',
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    },
    fadeIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class SportsAnalytics extends React.Component{
    render(){
        return(
            <StyleRoot>
                {/* <img src={Case} alt="Case Banner" className="w-100 case-banner"/> */}
                <video className="w-100 case-banner" autoPlay muted><source src={Video} type="video/mp4"/></video>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 page-content">
                            <h1 className="page text-white" style={styles.fadeIn}>Sports Analytics</h1>
                            <div className="page-content">
                                


                                <div className="row">
                                    <div className="col-md-offset-1 col-md-5">
                                        <p className="quote-block text-secondary" style={styles.slideInLeft}>
                                        Inspired by the dynamism of sports analytics, the precision of computer vision, and the advancements of machine learning, we developed bespoke software solutions tailored for our innovative technology needs.
                                        </p>
                                    </div>
                                    <div className="col-md-5">
                                        <p className="page text-white" style={styles.slideInRight}>
                                            Our goal was to advance the field of sports analytics by integrating the dynamic aspects of the sport with cutting-edge technological solutions. We focused on merging diverse analytical environments to develop a comprehensive system. As a result, we trained an AI model specifically designed for cameras to enhance the accuracy and depth of sports analysis. 
                                            <br/>
                                            <br/>
                                            This model leverages advanced algorithms to provide precise, actionable insights that elevate performance and strategy.
                                        </p>
                                    </div>
                                </div>

                                <div className="row case">
                                    <div className="col-md-offset-1 col-md-10" style={styles.slideInLeft}>
                                        <img src={Case1} alt="Case 1" className="w-100"/>
                                    </div>
                                </div> 

                                <div className="row case">
                                    <div className="col-md-offset-1 col-md-10" style={styles.slideInRight}>
                                        <img src={Case2} alt="Case 2" className="w-100"/>
                                    </div>
                                </div> 

                                <div className="row case">
                                    <div className="col-md-offset-1 col-md-10" style={styles.slideInLeft}>
                                        <img src={Case3} alt="Case 3" className="w-100"/>
                                    </div>
                                </div>   

                            </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default SportsAnalytics;