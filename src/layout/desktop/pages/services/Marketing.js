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

const Marketing =() =>{
    return(
        <StyleRoot>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 page-content">
                        <Link to="/services"><img src={redArrow} className="inverted" /></Link>
                        <h1 className="page text-white" style={styles.fadeIn}>marketing</h1>
                        <div className="page-content">
                            
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <h3 className="page text-white" style={styles.slideInLeft}>
                                        Fix the sails of your  business ship
                                    </h3>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-white" style={styles.slideInRight}>
                                        <span className="page text-secondary">Good marketing
                                        makes</span><br/>the company look smart
                                    </h3>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <p className="page text-white" style={styles.slideInLeft}>
                                        What Value can you Offer to your Customer?
                                        We’ll help you figure out what your brand can best offer in the market   
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <h3 className="page text-white" style={styles.slideInRight}>
                                        <span className="page text-secondary">Good marketing
                                        makes</span><br/>the company look smart
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleRoot>
    )
}

export default Marketing;