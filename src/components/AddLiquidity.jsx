import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function AddLiquidity() {
    const [edit, setEdit] = useState(false);
    const [token, setToken] = useState('');
    const [tokenPopup, setTokenPopup] = useState(false);
    const [order, setOrder] = useState(false);
    const [tier, setTier] = useState(0);

    const tierData = [
        {tierPercentage: '0.01%', desc: 'Best for very stable pairs', select:'0% select' },
        {tierPercentage: '0.05%', desc: 'Best for stable pairs', select:'0% select' },
        {tierPercentage: '0.3%', desc: 'Best for most pairs', select:'0% select' },
        {tierPercentage: '1%', desc: 'Best for exotic pairs', select:'0% select' },
    ]

    const tokenData = [
        {icon: 'icon3.jpg', name: 'BUSD'},
        {icon: 'icon4.jpg', name: 'BNB'},
        {icon: 'icon2.png', name: 'USDT'},
    ]

    useEffect(() => {
        setTier(tierData[0])
        setToken(tokenData[0])
    }, [])
  return (
    <div className='add-liquidity'>
        <div className="container">
            <div className="top-bar">
                <div className="col-md-1 left">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon">
                        <path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path>
                    </svg>
                </div>
                <div className="col-md-8 middle">
                    <h2>Add Liquidity</h2>
                </div>
                <div className="col-md-3 right">
                    <div className="right-content">
                        <p>Clear All</p>
                        <div className="toggle-btn">
                            <p className='toggle-btn-para'>BUSD</p>
                            <label className="switch">
                                <input type="checkbox" value="yes" onChange={() => {setOrder(!order)}} />
                                <span className="slider round"></span>
                            </label>
                            <p className='toggle-btn-para'>LITHO</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* main content */}
            <div className="main">
                <div className="row">
                    <div className="col-lg-7">
                        <h2>Select Pair</h2>
                        <div className="top-heading">
                            <div className="row">
                                <div className={order ? "col-sm-6 mt-2 order-1" : "col-sm-6 mt-2 order-0"}>
                                    <div className="main-content ripple">
                                        <div className="content">
                                            <img src="/images/icon1.png" alt="icons1" />
                                            <h4>LITHO</h4>
                                        </div>

                                    </div>
                                </div>
                                <div className={order ? "col-sm-6 mt-2 order-0" : "col-sm-6 mt-2 order-1"}>
                                    <div className="main-content" onClick={() => {setTokenPopup(true)}}>
                                        <div className="content">
                                            <img src={"/images/" + token.icon } alt={token.name} />
                                            <h4>{token.name}</h4>
                                        </div>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-33m4yg-11 iqRCax"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tier-info">
                            <div className="tier">
                                <div className="left">
                                    <h6>{tier.tierPercentage}</h6>
                                    <p>{tier.select}</p>
                                </div>
                                <div className="right">
                                    <button className='show-hide-btn' onClick={() => {setEdit(!edit)}}>{edit ? 'Hide' : 'Edit'}</button>
                                </div>
                            </div>
                            {edit && (
                                <div className="tier-options">
                                    <div className="row">
                                        {tierData.map((tier,index) => (
                                            <div className="col-sm-6 col-lg-3 my-2" key={index}>
                                                <div className="single-option" onClick={() => {setTier(tier)}}>
                                                    <h6>{tier.tierPercentage}</h6>
                                                    <p>{tier.desc}</p>
                                                    <p className='select'>{tier.select}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* deposit */}
                            <div className="deposit">
                                <h2>Deposit amounts</h2>
                                <div className="row">
                                    <div className={order ? "col-sm-12 order-1" : "col-sm-12 order-0"}>
                                        <div className="deposit-single">
                                            <h4>0.0</h4>
                                            <div className="right">
                                                <div className="currency">
                                                    <img src="/images/icon1.png" alt="icons" />
                                                    <p>LITHO</p>
                                                </div>
                                                <p className='balance'>Balance: 0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={order ? "col-sm-12 order-0" : "col-sm-12 order-1"}>
                                        <div className="deposit-single">
                                            <h4>0.0</h4>
                                            <div className="right">
                                                <div className="currency">
                                                    <img src={"/images/" + token.icon } alt={token.name} />
                                                    <p>{token.name}</p>
                                                </div>
                                                <p className='balance'>Balance: 0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2>Set Price Range</h2>
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
    </div>
  )
}
