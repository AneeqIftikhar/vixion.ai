import React, {useRef} from 'react';
import Menu from './Menu';
import logo from '../../assets/images/logo.png';
import maddot from '../../assets/images/bouncingdot.png';
import menu from '../../assets/images/menu.png';
import HomeContent from './components/HomeContent';
import ServicesContent from './components/ServicesContent';
import CasesContent from './components/CasesContent';
import ContactContent from './components/ContactContent';
import {
    Link,
    Redirect
} from "react-router-dom";


class Home extends React.Component{
    constructor(props){
        super(props);

        this.isWheelAllowed = true;
        this.scrollThreshold = 0;
        this.section = 0;
        this.state = {
            redirect: props.section,
            scrollLeft: 0,
            scrollHandler: null,
            scrollDelta: 0,
            scrollValue:0,
            mouseOver: true, 
            section:0,
            index: 0,
            scale:0,
            width: window.innerWidth,
            headWidth: 60,
            headings : [
                {
                    position: 'fixed',
                    left: '0px',
                    right: 'initial' 
                },
                {
                    position: 'relative',
                    left: 'initial',
                    right: 'initial' 
                },
                {
                    position: 'fixed',
                    left: 'initial',
                    right: '60px'
                },
                {
                    position: 'fixed',
                    left: 'initial',
                    right: "0px" 
                }
            ]
        }
    }

    componentDidMount(){
        let section = 0;
        if(this.props.section === '/services'){
            section = 1;
        }else if(this.props.section === '/cases'){
            section = 2;
        }else if(this.props.section === '/contact'){
            section = 3;
        }
        this.section = section;
        this.setState({section: section});
        document.getElementById('main').scrollLeft = section * (this.state.width-4*this.state.headWidth);

        document.getElementById('main').addEventListener('scroll', this.myScroll);
        document.getElementById('root').addEventListener('wheel', this.onWheel);
    }

    scrollToSection = (section) => {
        if(this.state.scrollHandler){
            clearInterval(this.state.scrollHandler);
        }
        var value = section * (this.state.width-4*this.state.headWidth);
        var dt = 100;
        var scrollDelta = (value - document.getElementById('main').scrollLeft)*2/dt
        this.setState({scrollValue : value, scrollDelta: scrollDelta});
        var scrollHandler = setInterval(this.timer, 150/dt);
        this.setState({scrollHandler: scrollHandler, section:section});
    }

    timer = () => {
        document.getElementById('main').scrollLeft += this.state.scrollDelta;
        if(Math.abs(this.state.scrollValue - document.getElementById('main').scrollLeft)<= 2*Math.abs(this.state.scrollDelta)){
            clearInterval(this.state.scrollHandler);
            this.setState({scrollHandler: null});
            this.isWheelAllowed = true;
            document.getElementById('main').scrollLeft = this.state.scrollValue;
        }
    }

    componentWillUnmount(){
        if(this.state.scrollHandler){
            clearInterval(this.state.scrollHandler);
            this.isWheelAllowed = true;
        }
        document.getElementById('main').removeEventListener('scroll', this.myScroll);
        document.getElementById('root').removeEventListener('wheel', this.onWheel);
    }
    onWheel = (e) => {
        console.log("Wheel", e.deltaY, this.isWheelAllowed, this.state.scrollHandler,this.scrollThreshold);
        var main = document.getElementById('main');
        if(Math.abs(e.deltaX) < 2){
            e.preventDefault();
            // if(Math.abs(this.scrollThreshold)>=200){
                // if(this.isWheelAllowed){
                //     if(e.deltaY<0 && Math.abs(e.deltaY)>2 && this.section>0){
                //         this.section--;
                //         this.scrollToSection(this.section);
                //         this.setState({section: this.section});
                //         this.isWheelAllowed = false;
                //     }else if(e.deltaY>0 && Math.abs(e.deltaY)>2 && this.section<3){
                //         this.section++;
                //         this.scrollToSection(this.section);
                //         this.setState({section: this.section});
                //         this.isWheelAllowed = false;
                //     }
                // }
            //     this.scrollThreshold = 0;
            // }else{
            //     this.scrollThreshold += e.deltaY;
                main.scrollTo({
                    top: 0,
                    left: main.scrollLeft + e.deltaY*2,
                });
            // }
        }
    };

    myScroll = () => {
        const scrollLeft = document.getElementById('main').scrollLeft;
        this.setState({
            scrollLeft: scrollLeft
        });
        if(scrollLeft === 0){
            this.setState({index: 0});
            this.leftPosition(1);
            this.relative(2);
            this.rightPosition(3);
            this.rightPosition(4);
        }else if(scrollLeft > 0 && scrollLeft <= this.state.width-4*this.state.headWidth){
            this.setState({
                index: 1,
                width: this.state.width,
                headWidth: this.state.headWidth,
                headings: this.state.headings
            });
            this.leftPosition(1);
            this.relative(2);
            this.rightPosition(3);
            this.rightPosition(4);
        }else if(scrollLeft > this.state.width-4*this.state.headWidth && scrollLeft <= 2*(this.state.width-4*this.state.headWidth)){
            this.setState({
                index: 2,
                width: this.state.width,
                headWidth: this.state.headWidth,
                headings: this.state.headings
            });
            this.leftPosition(1);
            this.leftPosition(2);
            this.relative(3);
            this.rightPosition(4);
        }else if(scrollLeft > 2*(this.state.width-4*this.state.headWidth)){
            this.setState({
                index: 3,
                width: this.state.width,
                headWidth: this.state.headWidth,
                headings: this.state.headings
            });
            this.leftPosition(1);
            this.leftPosition(2);
            this.leftPosition(3);
            this.relative(4);
        }
    }

    relative = (index) => {
        var headings = {...this.state.headings};
        headings[index-1] = { position : 'relative', left:'initial', right: 'initial'};
        this.setState({
            index: this.state.index,
            width: this.state.width,
            headWidth: this.state.headWidth,
            headings: headings
        });
    }

    leftPosition = (index) => {
        let headings = {...this.state.headings};
        headings[index-1] = { position : 'fixed', left:(this.state.headWidth*(index-1))+"px", right: 'initial'};
        this.setState({
            index: this.state.index,
            width: this.state.width,
            headWidth: this.state.headWidth,
            headings: headings
        });
    }

    rightPosition = (index) => {
        let headings = {...this.state.headings};
        headings[index-1] = { position : 'fixed', left:'initial', right: (this.state.headWidth*(4-index))+"px"};
        this.setState({
            index: this.state.index,
            width: this.state.width,
            headWidth: this.state.headWidth,
            headings: headings
        });
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

    routeMeTo = (path) => {
        this.setState({redirect: path});
    }

    animationStatus = (val) =>{
        console.log("Animation", val);
        this.setState({mouseOver: val});
    }

    render(){
        return(

            <section className="fullPage main background-1" id="main">
                {this.state.scale>0 && <Menu scale={this.state.scale} onClick={()=>this.closeMenu()}/>}
                <div className="tabs" onMouseEnter={()=>this.animationStatus(true)}  onMouseLeave={()=>this.animationStatus(false)}>
                    <div className="tab" id="tab1">
                        {/* <div className="heading" id="heading1" style={this.state.headings[0]}>
                            <div className="menu-container" onClick={()=>this.showMenu()}>
                                <img src={menu} alt="Menu" className="menu-icon"/>
                            </div>
                            <div className="header-logo">
                                <img src={logo} alt="maddot Logo"/>
                            </div>
                        </div> */}
                        <div className="container pl-0 fl">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="w-100 contents short" style={{'paddingTop': '0px'}}>
                                        <HomeContent animate={this.state.scrollLeft<this.state.width && this.state.mouseOver} isMobile={this.props.isMobile}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab" id="tab2">

                        <div className={"line heading" + (this.state.index === 1 ? ' active':'')} onClick={()=>{ this.scrollToSection(1) }} id="heading2" style={this.state.headings[1]} >
                            <p>services</p>
                        </div>
                        <div className="container pl-60">
                            <div className="row">
                                <div className="col-md-11">
                                    <div className={"w-100 contents" + (this.state.index >= 1 ? '':' hide')}>
                                        <ServicesContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab" id="tab3">
                        <div className={"line heading" + (this.state.index === 2 ? ' active':'')} onClick={()=>{ this.scrollToSection(2) }} id="heading3" style={this.state.headings[2]}>
                            <p>cases</p>
                        </div>
                        <div className="container pl-60">
                            <div className="row">
                                <div className="col-md-11">
                                    <div className="w-100 contents short">
                                        <CasesContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab" id="tab4">
                        <div className={"line heading" + (this.state.index === 3 ? ' active':'')} onClick={()=>{ this.scrollToSection(3) }} id="heading4" style={this.state.headings[3]}>
                            <p>contact</p>
                        </div>
                        <div className="container pl-60 contact-bg">
                            <div className="row">
                                <div className="col-md-11">
                                    <div className="contents">
                                        <ContactContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
