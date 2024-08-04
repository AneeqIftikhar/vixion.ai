import React from 'react';
import DesktopLayout from './desktop/DesktopLayout';


import bigBlackDot from '../assets/images/big-black-dot.png';
import smallBlackDot from '../assets/images/small-black-dot.png';
import madDot from '../assets/images/bouncingdot.png';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        width: window.innerWidth
        }
    }

    componentWillMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 600;
        return (
            <>
                <div className="animated-background">
                    <img src={bigBlackDot} className="bg-big-dot" />
                    <img src={smallBlackDot} className="bg-small-dot" />
                    <img src={madDot} className="bg-mad-dot" />
                </div>
                <DesktopLayout isMobile={isMobile}/>
            </>
        );
    }
}

export default Layout;
