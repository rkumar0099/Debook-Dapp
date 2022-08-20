import React, {useEffect, useState} from 'react';
import "../global.css";
import detectEthereumProvider from '@metamask/detect-provider';


const Connect = (props) => {
    const [loading, setLoading] = useState(false);
    const {ethereum} = window;

    const walletConnect = async () => {
            try {
                const provider = await detectEthereumProvider();
                if (!provider) {
                    alert('Please install Metamask extension!');
                    setLoading(false);
                    return;
                }
                if (provider !== window.ethereum) {
                    alert('Wallets mismatch!');
                    setLoading(false);
                    return;
                }

                const chainId = await ethereum.request({method: 'eth_chainId'});
                console.log(chainId);
                if (chainId !== "0x4") {
                    alert('You must connect to rinkeby test network!!');
                    setLoading(false);
                    return;
                }
            
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});
                console.log("Account addr: ", accounts[0]);
                props.sender(accounts[0]);
            } catch (err) {
                console.log('Error connecting to wallet')
                console.log('Connecting again');
                setLoading(false);
                return;
            }

            setLoading(false);
            return await props.flag(1);        
    }

    const handleClick = async (e) => {

        if (!loading) {
            walletConnect();
        } else {
            e.preventDefault();
        }
        return;   
    }


    return (
        <div className="landing">
            <div className="header">
                <div className="app-title">Debook</div>
            </div>
                <button className="btn-connect" onClick={handleClick}>
                    CONNECT TO WALLET
                </button>
            <p className="footer">
                &copy;2022 React App. All rights reserved
            </p>
        </div>
    );
}

export default Connect;