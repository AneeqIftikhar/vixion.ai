import React from 'react';
import SocialLinks from './SocialLinks';
import wildIdeas from '../../../assets/images/where-ideas-run-wild.png';

import Radium , {StyleRoot} from 'radium';
import { slideInDown, slideInUp, fadeIn } from 'react-animations';
import Ideas from './Ideas';

const styles = {
    slideInDown: {
        animationDelay: '3s',
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
    slideInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    fadeIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class MobileHomeContent extends React.Component{
    constructor(props){
        super(props);
        console.log("MobileHomeContent props", this.props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="cover-over-home"></div>
                            <img src={wildIdeas} className="wild-ideas" style={styles.fadeIn}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-2 col-md-5">
                            <p className="golroy-normal text-secondary m-0 p-0 home-text" style={styles.slideInDown}>
                                Everyone is extraordinary. 
                                We tease out the truly unique from people and brands and help craft creative ideas that blow the mind. 
                                In a world of “fake,” it’s time to be yourself.
                            </p>
                        </div>
                        <div className="col-md-5 mobile" style={styles.slideInDown}>
                            <SocialLinks secondary="true"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileHomeContent;
