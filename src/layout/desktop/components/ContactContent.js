import React from 'react';
class ContactContent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-5 col-xs-12">
                    <h2 className="p-0 m-0 sub-heading">let's communicate</h2>
                    <div className="left mt-30 inputs">
                        <label>
                            <input type="text" id="mad-name" name="mad-name" placeholder=" " className="input" autoComplete="new-password"/>
                            <span>Name</span>
                        </label>
                        <label>
                            <input type="text" id="mad-email" name="mad-email" placeholder=" " className="input"  autoComplete="new-password"/>
                            <span>Email</span>
                        </label>
                        <label>
                            <input type="text" id="mad-phone" name="mad-phone" placeholder=" " className="input"  autoComplete="new-password"/>
                            <span>Phone</span>
                        </label>
                        <label>
                            <input type="text" id="message" name="message" placeholder=" " className="input"  autoComplete="new-password"/>
                            <span>Message</span>
                        </label>
                    </div>
                    <div className="right">
                        <button className="btn mt-20">Submit</button>
                    </div>
                </div>
                <div className="col-md-6  col-xs-12 cup">
                </div>
            </div>
        );
    }
}

export default ContactContent;
