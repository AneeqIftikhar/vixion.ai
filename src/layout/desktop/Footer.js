import React from 'react';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu-horizontal.png';
class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const isHome = this.props.section === '/home'? true : this.props.section === '/cases'? true : this.props.section === '/services'? true : this.props.section === '/contact'? true: false;
    if(isHome && !this.props.isMobile){
      return (<></>);
    }else{
      return (
        <div className="container" style={{'position':'relative'}}>
            <div className="row footer">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="p-0 m-0 left gilroy-normal text-white">VIXION AI</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="p-0 m-0 right gilroy-normal text-white">All Rights Reserved ©2024</p>
                </div>
            </div>
        </div>
      );
    }
  }
}

export default Footer;