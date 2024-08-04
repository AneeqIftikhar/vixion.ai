import React from 'react';
import {
    useLocation
} from "react-router-dom";
import Home from './Home';
import MobileHome from './MobileHome';

export default function DesktopHome(props){
    const location  = useLocation();
    if(props.isMobile){
        return (
            <MobileHome isMobile={props.isMobile} section={location.pathname} />
        );
    }else{
        return (
            <Home isMobile={props.isMobile} section={location.pathname} />
        );
    }
}