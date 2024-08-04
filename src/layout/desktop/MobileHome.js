import React from 'react';
import Menu from './Menu';
import logo from '../../assets/images/logo.png';
import maddot from '../../assets/images/bouncingdot.png';
import arrowDown from '../../assets/images/arrow-down.png';
import ServicesContent from './components/ServicesContent';
import CasesContent from './components/CasesContent';
import ContactContent from './components/ContactContent';
import MobileHomeContent from './components/MobileHomeContent';
class MobileHome extends React.Component{
    constructor(props){
        super(props);
        console.log("Section Prop: ", props.section);
        this.myRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
        ];
    }

    executeScroll = (index) => this.myRefs[index].current.scrollIntoView()

    componentDidMount(){
        let section = 0;
        let scrollTop = 0;
        if(this.props.section === '/services'){
            section = 1;
            this.executeScroll(0);
        }else if(this.props.section === '/cases'){
            section = 2;
            this.executeScroll(1);
        }else if(this.props.section === '/contact'){
            section = 3;
            this.executeScroll(2);
        }
    }

    render(){
        return(
            <div className='fh' id="main">
                <div className="container mobile-home">
                    <div className="row">
                        <div className="col-xs-12">
                            <MobileHomeContent isMobile = {this.props.isMobile}/>
                        </div>
                    </div>
                </div>
                <div className="scroll-down" ref={this.myRefs[0]}>
                    <p className="page gilroy-normal text-secondary p-0 m-0">scroll down<img src={arrowDown} alt="scroll down arrow"/></p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="page text-white">Services</h1>
                            <ServicesContent/>
                        </div>
                    </div>
                </div>

                <div className="partition" ref={this.myRefs[1]}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="page text-white">Cases</h1>
                            <CasesContent />
                        </div>
                    </div>
                </div>



                <div className="partition" ref={this.myRefs[2]}></div>

                <div className="container contact-bg">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="page text-white">Contact</h1>
                            <ContactContent />
                        </div>
                    </div>
                </div>
                    
                    
                    
            </div>
        );
    }
}

export default MobileHome;