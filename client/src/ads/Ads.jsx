import React from 'react';
import './ads.css'

const Ads = ({mode}) => {
    return(
        <div className={"ads " + (mode && "active")}>
            <img alt="" src="/h_ad.png"/>
        </div>
    );
}; 
export default Ads;