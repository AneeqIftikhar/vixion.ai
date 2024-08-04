import React from 'react';
import Splash from './Splash';
import Routes from './Routes';
import WindowsRoutes from './WindowsRoutes';
class DesktopLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.os = window.navigator.appVersion.indexOf('Win') != -1 ? 'Windows' : 'Others'
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            this.state.seconds < 5 ? <Splash />: this.os == 'Windows'? <WindowsRoutes isMobile={this.props.isMobile}/> : <Routes isMobile={this.props.isMobile}/>
        );
    }
}

export default DesktopLayout;
