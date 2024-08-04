import React from 'react';
import {
    useLocation
} from "react-router-dom";
import Header from './Header';

export default function DesktopHeader(props){
    const location = useLocation();
    return (
        <Header isMobile={props.isMobile} section={location.pathname}/>
    );
}