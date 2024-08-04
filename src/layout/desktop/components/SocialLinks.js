import React from 'react';
class SocialLinks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12 mobile-center">
                    <a className={'social-links' + (this.props.secondary ? ' text-secondary':'')} href="https://www.linkedin.com/company/vixion-ai/" target="_blank">Linkedin</a>
                    <a className={'social-links' + (this.props.secondary ? ' text-secondary':'')} href="https://www.facebook.com/vixionai/" target="_blank">Facebook</a>
                    <a className={'social-links' + (this.props.secondary ? ' text-secondary':'')} href="https://clutch.co/profile/vixion-ai-0" target="_blank">Clutch</a>
                </div>
            </div>
        );
    }
}

export default SocialLinks;
