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
const Digital =() =>{
    return(
        <StyleRoot>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 page-content">
                        <Link to="/services"><img src={redArrow} className="inverted" /></Link>
                        <h1 className="page text-white" style={styles.fadeIn}>digital</h1>
                        <div className="page-content">
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h2 className="page text-white" style={styles.slideInLeft}>Design, the Maddot Way</h2>
                                </div>
                                <div className="col-md-5">
                                    <p className="quote text-secondary" style={styles.slideInRight}>
                                    "A user interface is like a joke. If you have to explain it, it's not that good." <br/>
                                    – Martin LeBlanc 
                                    </p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h3 className="page text-secondary" style={styles.fadeIn}>
                                        Captivate the User
                                    </h3>
                                    <p className="page text-white" style={styles.slideInLeft}>
                                        Eight seconds is the average human attention span according to a study by Microsoft. We help you make every second count.
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-secondary" style={styles.fadeIn}>
                                        Be Unique
                                    </h3>
                                    <p className="page text-white" style={styles.slideInRight}>
                                        Want to stand out from the crowd? Simple: be yourself.  Don’t try to fit in; it’s those who dare to be different who leave a lasting impression. 
                                    </p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h3 className="page text-secondary" style={styles.fadeIn}>
                                        Be Persuasive
                                    </h3>
                                    <p className="page text-white" style={styles.slideInLeft}>
                                        Forget gimmicks, being real goes a long way. Tell your story like it is and people will relate.  
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-secondary" style={styles.fadeIn}>
                                        Good Design Is Hard to See
                                    </h3>
                                    <p className="page text-white" style={styles.slideInRight}>
                                        Poor design stands out for all the wrong reasons. Great design is so seamless it’s invisible to the naked eye.
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

export default Digital;