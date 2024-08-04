import React from 'react';
import logo from '../../assets/images/logo.png';
import maddot from '../../assets/images/bouncingdot.png';
import Radium , {StyleRoot} from 'radium';
import { fadeIn, bounceInDown } from 'react-animations';

const styles = {
    fadeIn: {
        animation: 'x 4s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    bounceInDown: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}

class Splash extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <StyleRoot>
                <div className="fullPage background-1">
                    {/* <img className="splash-maddot" src={maddot} alt="maddot" style={styles.bounceInDown}/> */}
                    <img className="splash-logo" src={logo} alt="maddot Logo" style={styles.fadeIn}/>
                </div>
            </StyleRoot>
        );
    }
}

export default Splash;
