import React from 'react';
import Page from '../../Page';
import adam1 from '../../../../assets/images/development/adam_1.png';
import adam2 from '../../../../assets/images/development/adam_2.png';
import james1 from '../../../../assets/images/development/james_1.png';
import james2 from '../../../../assets/images/development/james_2.png';
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
class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StyleRoot>
                <div className="animated-background">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 about-bg">
                            <h1 className="page text-white" style={styles.fadeIn}>about us</h1>
                            <div className="page-content">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-10">
                                        <p className="quote text-white" style={styles.slideInRight}>
                                            Any company can make noise and pull PR stunts in the hope of making a sale, but it’s a crowded market out there. Success is no longer about shouting the loudest; consumers are smarter than that.
                                            At Maddot, we drown out the noise and focus on people with a passion, and ideas with impact. We make disruption simple. 
                                        </p>
                                    </div>
                                </div>
                                
                                {!this.props.isMobile ? <><br/><br/><br/><br/></> : <></>}

                                <div className="row">
                                    <div className="col-md-offset-1 col-md-5">
                                        <h3 className="page text-secondary" style={styles.slideInLeft}>
                                            Maddot is Not Vanilla
                                        </h3>
                                        <p className="page text-white" style={styles.slideInRight}>
                                            Everyone likes Vanilla, Vanilla is ordinary, don’t be Vanilla.
                                            Life is too short to be Ordinary.
                                            MadGoat is like “Mint Oreo Cookie”, love it or hate it, but never settle for less.
                                            Don’t settle for basic, baby. Extraordinary is where it’s at.
                                        </p>
                                    </div>
                                    <div className="col-md-5">
                                        
                                    </div>
                                </div>
                                
                                
                                {!this.props.isMobile ? <><br/><br/><br/><br/></> : <></>}

                                <div className="row">
                                    <div className="col-md-offset-1 col-md-5">
                                        <h3 className="page text-secondary" style={styles.slideInLeft}>
                                            Why Maddot likes the Odd?
                                        </h3>
                                        <p className="page text-white" style={styles.slideInRight}>
                                            If an idea is not chaotically beautiful, if not engaging enough to stand out in the crowd, it’s a waste of an idea, because then again, what’s the fun in that?
                                            And, if an idea is not good enough to be called smart or innovative, for us, it’s like falling on deaf ears – no matter the loudness of the message.  
                                        </p>
                                    </div>
                                    <div className="col-md-5">
                                        <h3 className="page text-secondary" style={styles.slideInLeft}>
                                            Mind Reading? Nah, just a Mindset
                                        </h3>
                                        <p className="page text-white" style={styles.slideInRight}>
                                            The real talent is putting yourself in your customer’s shoes. Understanding their pain-points and presenting not what you want to show but what your customer wants to see.
                                            Lost it? Well, in reality, Maddot just loves to read its customer’s mind in spare time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="page text-white" style={styles.fadeIn}>mad team</h1>
                        </div>
                    </div>
                </div>
                <div className="contained">
                    <div className="outer outer-bg">
                        <div className="inner">
                            <img src={james1} alt="James" className="member-image"/>
                            <div className="hanging">
                                <h2 className="quote-block text-white m-0">James Hudson</h2>
                                <p className="page text-white m-0">designer</p>
                            </div>
                        </div>
                        <div className="inner">
                            <img src={adam1} alt="James" className="member-image"/>
                            <div className="hanging">
                                <h2 className="quote-block text-white m-0">Adam Smith</h2>
                                <p className="page text-white m-0">art director</p>
                            </div>
                        </div>
                        <div className="inner">
                            <img src={james2} alt="James" className="member-image"/>
                            <div className="hanging">
                                <h2 className="quote-block text-white m-0">James Hudson</h2>
                                <p className="page text-white m-0">designer</p>
                            </div>
                        </div>
                        <div className="inner">
                            <img src={adam2} alt="James" className="member-image"/>
                            <div className="hanging">
                                <h2 className="quote-block text-white m-0">Adam Smith</h2>
                                <p className="page text-white m-0">art director</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-content extra-padding">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-10">
                                        <p className="quote-block text-secondary" style={styles.slideInRight}>
                                            Build that confidence in yourself and create that cohesive vision in your company.
                                        </p>
                                        <div className="left">
                                            <button className="btn mt-20" style={styles.fadeIn}>Contact us</button>
                                        </div>
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

export default About;