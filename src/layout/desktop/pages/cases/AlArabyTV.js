import React from 'react';
import Page from '../../Page';
import Case from '../../../../assets/images/case.png';
import Case1 from '../../../../assets/images/case1.png';
import Case2 from '../../../../assets/images/case2.png';
import Case3 from '../../../../assets/images/case3.png';
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

class AlArabyTV extends React.Component{
    render(){
        return(
            <StyleRoot>
                <img src={Case} alt="Case Banner" className="w-100 case-banner"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 page-content">
                            <h1 className="page text-white" style={styles.fadeIn}>Al Araby TV</h1>
                            <div className="page-content">
                                


                                <div className="row">
                                    <div className="col-md-offset-1 col-md-5">
                                        <p className="quote-block text-secondary" style={styles.slideInLeft}>
                                            Inspired by the beauty of Arab culture, the nature of the world and digital technologies, we designed a logo and corporate identity specifically for Al Araby Television.  
                                        </p>
                                    </div>
                                    <div className="col-md-5">
                                        <p className="page text-white" style={styles.slideInRight}>
                                            The idea was to develop brand identity by combining the subtle beauty of the Arab world with modern technology. Using visual construction of the intersection of various environments, we have achieved the result. This principle became the basis of the system of graphic elements that we used as the core of visual identity.
                                            <br/>
                                            <br/>
                                            We chose this color combination because it is well suited to digital themes. Bright red color is associated with dawn and goes well with the dark blue color of the Arabian night.
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

export default AlArabyTV;