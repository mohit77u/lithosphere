import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Swap() {
    const [token, setToken] = useState('');
    const [tokenPopup, setTokenPopup] = useState(false);

    const tokenData = [
        {icon: 'icon3.jpg', name: 'BUSD'},
        {icon: 'icon4.jpg', name: 'BNB'},
        {icon: 'icon2.png', name: 'USDT'},
    ]

    useEffect(() => {
        setToken(tokenData[0])
    }, [])
  return (
    <div className='swap'>
        {/* main content */}
        <div className="main container">
            <div className="row">
                <div className="col-sm-10 col-md-6 col-lg-5 main-col">
                    <div className="tier-info">
                        {/* deposit */}
                        <div className="deposit">
                            <h2>Swap</h2>
                            <div className="row mt-3">
                                <div className="col-sm-12">
                                    <div className="deposit-single ">
                                        <h4>0.0</h4>
                                        <div className="right ripple">
                                            <div className="currency">
                                                <img src="/images/icon1.png" alt="icons" />
                                                <p>LITHO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="deposit-single" onClick={() => {setTokenPopup(true)}}>
                                        <h4>0.0</h4>
                                        <div className="right ripple">
                                            <div className="currency">
                                                <img src={"/images/" + token.icon } alt={token.name} />
                                                <p>{token.name}</p>
                                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-33m4yg-11 iqRCax"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="connect-btn ripple">
                                        CONNECT WALLET
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        {/* token popup */}
        {tokenPopup && (
            <div className="popup" onClick={() => {setTokenPopup(false)}}>
                <div className="popup-box">
                    <h2>Select Token</h2>
                    <ul>
                        {tokenData.map((token,index) => (
                            <li key={index}>
                                <button onClick={() => {setToken(token)}}>
                                    <img src={"/images/" + token.icon} alt={token.name} />
                                    <p>{token.name}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
  )
}
