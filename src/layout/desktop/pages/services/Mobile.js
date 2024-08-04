import React from 'react';
import Page from '../../Page';
import Radium , {StyleRoot} from 'radium';
import { slideInLeft, slideInRight, fadeIn } from 'react-animations';
import redArrow from '../../../../assets/images/red-arrow-back.png';
import {
    Link
} from "react-router-dom";

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
const Mobile =() =>{
    return(
        <StyleRoot>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 page-content">
                        <Link to="/services"><img src={redArrow} className="inverted" /></Link>
                        <h1 className="page text-white" style={styles.fadeIn}>mobile</h1>
                        <div className="page-content">
                            
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h3 className="page text-white" style={styles.slideInLeft}>
                                        With Maddot, your brand is more than just a Name, it’s a feeling.
                                    </h3>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-white" style={styles.slideInRight}>
                                        When people start using your brand name as a verb, that is success.
                                    </h3>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h3 className="page text-secondary" style={styles.slideInLeft}>
                                        Competition? What Competition?
                                    </h3>
                                    <p className="page text-white" style={styles.slideInRight}>
                                        At Maddot, we get to know our clients inside-out and grow as passionate about their companies as they are. It is this insight and enthusiasm that help us create brand identities that fit, and keep companies ahead of the curve.    
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-secondary" style={styles.slideInLeft}>
                                        An Impression that Lasts
                                    </h3>
                                    <p className="page text-white" style={styles.slideInRight}>
                                        Let Maddot join you on your journey. Let us help you create a market-leading brand that will stay ahead of the competition and at the forefront of customer minds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleRoot>
    )
}

export default Mobile;