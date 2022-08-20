import React, {useState, useRef, useEffect} from 'react';
import "../global.css";

const Buyer = (props) => {
    const contract = props.contract;
    const sender = props.sender;

    const handleBack = () => {
        props.flag(0);
    }

    return (
        <div className="landing">
          <div className="header">
            <div className="app-title">Debook</div>
          </div>
          <div className="landing-container">
            <button className="btn-register" onClick={handleClickAuthor}>Search Books?</button>
            <button className="btn-register" onClick={handleClickBuyer}>Add Contribution?</button>
            <button className="btn-register" onClick={handleClickBuyer}>Withdraw Contribution?</button>
          </div>
          <div className="go-back" onClick={handleBack}>Go Back</div>
          <p className="footer">
            &copy;2022 React App. All rights reserved
          </p>
        </div>
        
    );
}

export default Buyer