import React from 'react';
import {
    Link
} from "react-router-dom";

import case1 from '../../../assets/images/case1.png';
import case2 from '../../../assets/images/case2.png';
import case3 from '../../../assets/images/case3.png';



class CasesContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCase1: false,
            showCase2: false,
            showCase3: false,
            mt: 0,
            showMore: false
        }
    }

    showCase = (c, mt)=>{
        var myState = this.state;
        console.log(myState);
        myState["showCase"+c] = true;
        myState.mt = mt;
        this.setState(myState);

    }

    hideCase = (c)=>{
        var myState = this.state;
        console.log(myState);
        myState["showCase"+c] = false;
        this.setState(myState);
    }

    showMore = () =>{
        console.log("Show More");
        this.setState({showMore: !this.state.showMore});
    }

    render(){

        let more = <></>;

        if(this.state.showMore){
            more = <>
                <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(1, 7)}  onMouseLeave={()=>this.hideCase(1)} to="/cases/al-araby-tv">Generative AI</Link></h2>
                <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(2, 8)}  onMouseLeave={()=>this.hideCase(2)} to="/cases/al-araby-tv">Chat Bot</Link></h2>
                <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(3, 9)}  onMouseLeave={()=>this.hideCase(3)} to="/cases/al-araby-tv">Retail Analytics</Link></h2>
            </>
        }

        return(
            <div className="row">
                <div className="cases-screens">
                    <img src={case1} className={this.state.showCase1?'case1 mt-'+this.state.mt:'h case1'}/>
                    <img src={case2} className={this.state.showCase2?'case2 mt-'+this.state.mt:'h case2'} />
                    <img src={case3} className={this.state.showCase3?'case3 mt-'+this.state.mt:'h  case3'} />
                </div>
                <div className="col-md-4 long text-white">
                    <p className="page gilroy-normal">
                        Give us a problem - and we will collect the necessary data, conduct analytics, assemble a multifunctional team and issue as many solutions as we can.
                    </p>
                    <p className="page gilroy-normal">
                        We will work at night, exploring the full range of possibilities. Then we will give you some fully formed concepts that perfectly solve the problem.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(1, 1)}  onMouseLeave={()=>this.hideCase(1)} to="/cases/sports-analytics">Sports Analytics</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(3, 3)}  onMouseLeave={()=>this.hideCase(3)} to="/cases/al-araby-tv">Trafic Analytics</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(2, 2)}  onMouseLeave={()=>this.hideCase(2)} to="/cases/al-araby-tv">Virtual Try-on</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(1, 4)}  onMouseLeave={()=>this.hideCase(1)} to="/cases/al-araby-tv">UAVs & Rovers</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(2, 5)}  onMouseLeave={()=>this.hideCase(2)} to="/cases/al-araby-tv">Surveillance</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(1, 4)}  onMouseLeave={()=>this.hideCase(1)} to="/cases/al-araby-tv">OCR</Link></h2>
                    <h2 className="p-0 m-0 sub-heading"><Link onMouseEnter={()=>this.showCase(2, 5)}  onMouseLeave={()=>this.hideCase(2)} to="/cases/al-araby-tv">Real Time Data Analysis</Link></h2>
                    {more}
                    <div className="mt-20 mm">
                        <a className="btn pointer" onClick={()=>this.showMore()}>{this.state.showMore?'View Less':'All Cases'}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CasesContent;
