import React from 'react';
import {
    useLocation
} from "react-router-dom";
import Footer from './Footer';

export default function DesktopFooter(props){
    const location = useLocation();
    return (
        <Footer isMobile={props.isMobile} section={location.pathname}/>
    );
}