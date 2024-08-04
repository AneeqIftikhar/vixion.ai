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

class HomeContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mouseOver: true
        }
        console.log("HomeContent props", this.props);
    }

    animationStatus = (val) =>{
        console.log("Animation", val);
        this.setState({mouseOver: val});
    }

    render(){
        return(
            <div className="row" onMouseEnter={()=>this.animationStatus(true)}  onMouseLeave={()=>this.animationStatus(true)}>
                <div className="col-md-12 vh-100">
                    <div className="row">
                        <div className="col-md-12 where-ideas-bg">
                            <Ideas animate={this.props.animate}/>
                        </div>
                    </div>
                    <div className="row desktop-home-content">
                        <div className="col-md-offset-1 col-md-5 col-xl-6">
                            <p className="golroy-normal text-secondary m-0 p-0 home-text" style={styles.slideInDown}>
                            Everyone has something extraordinary within them. 
                            Using advanced AI technology, we delve deep to discover and highlight what makes individuals and brands truly unique. 
                            Embrace authenticity with us, and let's showcase your true identity in the digital landscape.
                            </p>
                        </div>
                        <div className="col-md-5 desktop-home-content-social" style={styles.slideInDown}>
                            <SocialLinks secondary="true"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;
