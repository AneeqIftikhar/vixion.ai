import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import ilogo from '../../assets/images/logo-inverted.png';
import menu from '../../assets/images/menu-horizontal.png';
import menuv from '../../assets/images/menu.png';
import imenu from '../../assets/images/white-dot.png';
import SocialLinks from './components/SocialLinks';
class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            scale:0,
            width: window.innerWidth,
            headings : [
                {
                    position: 'fixed',
                    left: '0px',
                    right: 'initial'
                },
                {
                    borderBottom: '1px solid #EF4646'
                }
            ]
        }
    }

    showMenu = () => {
        clearInterval(this.hideHandle);
        if(!this.showHandle){
            this.showHandle = setInterval(()=>{
                var scale = this.state.scale;
                if(this.state.scale>=100){
                    clearInterval(this.showHandle);
                    this.showHandle = null;
                }else{
                    scale = scale+1;
                    this.setState({scale: scale});
                }
            }, 5);
        }
    }

    closeMenu = () => {
        clearInterval(this.showHandle);
        if(!this.hideHandle){
            this.hideHandle = setInterval(()=>{
                var scale = this.state.scale;
                if(this.state.scale<=0){
                    clearInterval(this.hideHandle);
                    this.hideHandle = null;
                }else{
                    scale = scale-1;
                    this.setState({scale: scale});
                }
            }, 5);
        }
    }
    render(){
        const isHome = this.props.section === '/home'? true : this.props.section === '/cases'? true : this.props.section === '/services'? true : this.props.section === '/contact'? true: false;
        let header = <>
            <div className="menu-heading">
                <div className="menu-close">
                    <p className="p-0 m-0" onClick={()=>this.closeMenu()}><img src={imenu} className="white-dot" alt="close dot"/> Close</p>
                </div>
                <div className="header-logo">
                    <Link to="/home" onClick={()=>this.closeMenu()}><img src={ilogo} alt="maddot Logo"/></Link>
                </div>
            </div>
        </>

        let headerContent = <>
            <div className="heading" id="heading1" style={this.state.headings[0]}>
                <div className="menu-container" onClick={()=>this.showMenu()}>
                    <img src={menuv} alt="Menu" className="menu-icon"/>
                </div>
                <div className="header-logo">
                    <Link to="/home" onClick={()=>this.closeMenu()}><img src={logo} alt="maddot Logo"/></Link>
                </div>
            </div>
        </>;

        if(!(isHome && !this.props.isMobile)){
            header = <>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 left">
                                <Link to="/home" onClick={()=>this.closeMenu()}><img className="hilogo pointer" src={ilogo} alt="maddot logo" /></Link>
                            </div>
                            <div className="col-xs-6 right">
                                <span className="gilroy-normal color-white close pointer" onClick={()=>this.closeMenu()}>Close <img className="himenu" src={imenu} alt="close dot" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            headerContent = <>
                <div className="header" style={isHome && this.props.isMobile? this.state.headings[1]:{}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 left">
                                <Link to="/home" onClick={()=>this.closeMenu()}><img className="hlogo pointer" src={logo} alt="maddot logo" /></Link>
                            </div>
                            <div className="col-xs-6 right">
                                <img className="hmenu pointer" src={menu} alt="maddot menu" onClick={()=>this.showMenu()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }

        return (
            <>
                <div className={this.state.scale<=0? 'h fullPage background-red layover' : 'fullPage background-red layover'} style={isHome && !this.props.isMobile?{ 'WebkitClipPath': 'circle(calc('+(this.state.scale)+'vh + '+(this.state.scale)+'vw) at 30px 30px)'}: { 'WebkitClipPath': 'circle(calc('+(this.state.scale)+'vh + '+(this.state.scale)+'vw) at calc(100% - 74px) 65px)'}}>
                    {header}
                    <div className="container layover-menu">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6 col-sm-offset-1 col-sm-11">
                                <div className="div-links">
                                    <h1 className="m-0 p-0"><Link to="/services" onClick={()=>this.closeMenu()}>services</Link></h1>
                                    <h1 className="m-0 p-0"><Link to="/cases" onClick={()=>this.closeMenu()}>cases</Link></h1>
                                    <h1 className="m-0 p-0"><Link to="/about" onClick={()=>this.closeMenu()}>about</Link></h1>
                                    <h1 className="m-0 p-0"><Link to="/contact" onClick={()=>this.closeMenu()}>contact</Link></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-3 col-md-6 col-sm-offset-1 col-sm-11">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {headerContent}
            </>
        );
    }
}

export default Header;
