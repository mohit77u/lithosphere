import React from 'react'
import CurrencyChart from './charts/CurrencyChart'

export default function PoolDetails() {


  return (
    <div className='pool-details'>
      <div className="container">
        <div className="details">
          <div className="top-heading">
            <div className="icons">
              <img src="/images/icon1.png" alt="icon" />
              <img src="/images/icon2.png" alt="icon" />
            </div>
            <div className="currecny">
              <h2>LITHO/URDT</h2>
            </div>
            <div className="percentage">
              <span>0.03%</span>
            </div>
          </div>
          <div className="currency-details">
            <button className='ripple'>
              <img src="/images/icon1.png" alt="icon" />
              <p>1 LITHO = 0.001 USDT</p>
            </button>
            <button  className='ripple'>
              <img src="/images/icon2.png" alt="icon" />
              <p>1 USDT = 1.62K LITHO</p>
            </button>
          </div>

          <div className="main-details">
            <div className="row">
              <div className="col-sm-12 col-lg-4 my-2">
                <div className="left-details">
                  <div className="token-top">
                    <h3>Total Tokens Locked</h3>
                    <div className="token-details">
                      <div className="single-token my-2">
                        <div className="left-token">
                          <img src="/images/icon1.png" alt="icon" />
                          <p>LITHO</p>
                        </div>
                        <p>4.88m</p>
                      </div>
                      <div className="single-token">
                        <div className="left-token">
                          <img src="/images/icon2.png" alt="icon" />
                          <p>USDT</p>
                        </div>
                        <p>4.26k</p>
                      </div>
                    </div>
                  </div>
                  {/* other details */}
                  <div className="other-details">
                    <div className="details">
                      <h4>TVL</h4>
                      <p>$11.79m</p>
                      <p className="direction up">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon">
                          <path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path>
                        </svg>
                        <span>3.33%</span>
                      </p>
                    </div>
                    <div className="details">
                      <h4>Volume 24h</h4>
                      <p>$11.79m</p>
                      <p className="direction down">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon">
                          <path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path>
                        </svg>
                        <span>8.67%</span>
                      </p>
                    </div>
                    <div className="details">
                      <h4>24h Fees</h4>
                      <p>$11.79m</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-8 my-2">
                <div className="right-details">
                  <div className="top-bar">
                    <div className="row">
                      <div className="col-sm-4 col-lg-6">
                        <h4>$2.06m</h4>
                      </div>
                      <div className="col-sm-8 col-lg-6">
                        <div className="buttons">
                          <div className="buttons-group">
                            <button className='btn'>VOLUME</button>
                            <button className='btn'>TVL</button>
                            <button className='btn'>LIQUIDITY</button>
                            <button className='btn'>FEES</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* chart */}
                  <div className="chart mt-5">
                    {/* chart */}
                    <CurrencyChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
