import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import "../global.css";
import Landing from './Landing';
import Connect from "./Connect";
import Author from "./Author";
import Buyer from "./Buyer";
import BookPool from "./BookPool";
import BookInfo from "./BookInfo";
import UploadBook from "./UploadBook";
import AuthorRevenue from "./AuthorRevenue";


const Main = () => {
  // init web3 provider here
  const [sender, setSender] = useState('');
  const [flag, setFlag] = useState(0);
  const [backFlag, setBackFlag] = useState(0);


  const handleBack = () => {
    setFlag(0);
  }

    if (flag == 0) {
      return <Landing 
      flag={setFlag} backFlag={setBackFlag} web3={web3}
      sender={setSender} contract={contract} />

    } else if (flag == 1) {

      return <Connect 
      flag={setFlag} backFlag={setBackFlag} web3={web3}
      sender={sender} contract={contract} />

    } else if (flag == 2) {

      return <Author
      flag={setFlag} backFlag={setBackFlag} web3={web3}
      sender={sender} contract={contract} />

    } else if (flag == 3) {

        return <Buyer
        flag={setFlag} backFlag={setBackFlag} web3={web3}
        sender={sender} contract={contract} />

    } else if (flag == 5) {

        return <UploadBook 
        flag={setFlag} backFlag={backFlag} web3={web3}
        contract={contract} sender={sender} />

    }

    // keep adding flags if you have more components to add

    
    else {
        return (
          <div className="landing">
            <text className="error"> Error </text>
            <button className="go-back" onClick={handleBack}>Go Back</button>
          </div>
        )
    }

}

export default Main;