import React from 'react';
import {
    Link,
} from "react-router-dom";
import logo from '../../assets/images/logo-inverted.png';
import whiteDot from '../../assets/images/white-dot.png';
import SocialLinks from './components/SocialLinks';
class Menu extends React.Component{
    render(){
        return(
            <div className="fullPage background-red layover" style={{ 'clipPath': 'circle(calc('+(this.props.scale)+'vh + '+(this.props.scale)+'vw) at 30px 30px)'}}>
                <div className="menu-heading">
                    <div className="menu-close">
                        <p className="p-0 m-0" onClick={this.props.onClick}><img src={whiteDot} className="white-dot" alt="close dot"/> Close</p>
                    </div>
                    <div className="header-logo">
                        <img src={logo} alt="maddot Logo"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6">
                            <div className="div-links">
                                <h1 className="m-0 p-0"><Link to="/services" onClick={this.props.onClick}>services</Link></h1>
                                <h1 className="m-0 p-0"><Link to="/cases" onClick={this.props.onClick}>cases</Link></h1>
                                <h1 className="m-0 p-0"><Link to="/about" onClick={this.props.onClick}>about</Link></h1>
                                <h1 className="m-0 p-0"><Link to="/contact" onClick={this.props.onClick}>contact</Link></h1>
                            </div>
                            <div className="social-container">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;