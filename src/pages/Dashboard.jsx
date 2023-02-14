import React from 'react'
import BnbChart from '../components/charts/BnbChart'
import BtcChart from '../components/charts/BtcChart'
import EthChart from '../components/charts/EthChart'
import LtcChart from '../components/charts/LtcChart'
import MarketOverViewChart from '../components/charts/MarketOverViewChart'
// import Header from '../components/Header'

export default function Dashboard()
{
  const tableData = [
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
  ]

  const recentActivities = [
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
    { price: '11.37m', amount: '36.44', total: '394.30m' },
  ]

  return (
    <div className='dashboard'>
      {/* Header */ }
      {/* <Header /> */}

      {/* main top bar */ }
      <section className="top-bars">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 mt-3">
              <div className="card">
                <div className="card-content">
                  <div className="left">
                    <img src="/images/btc.png" alt="btc" />
                    <p>Bitcoin(BTC)</p>
                  </div>
                  <div className="right">
                    <BtcChart />
                    <p>$1500</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-3">
              <div className="card">
                <div className="card-content">
                  <div className="left">
                    <img src="/images/eth.png" alt="eth" />
                    <p>Ethereum(ETH)</p>
                  </div>
                  <div className="right">
                    <EthChart />
                    <p>$8860</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-3">
              <div className="card">
                <div className="card-content">
                  <div className="left">
                    <img src="/images/ltc.png" alt="ltc" />
                    <p>Litecoin(LTC)</p>
                  </div>
                  <div className="right">
                    <LtcChart />
                    <p>$800</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-3">
              <div className="card">
                <div className="card-content">
                  <div className="left">
                    <img src="/images/bnb.png" alt="bnb" />
                    <p>Binance(BNB)</p>
                  </div>
                  <div className="right">
                    <BnbChart />
                    <p>$970</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* grids */ }
      <section className="grids pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="card">
                <div className="card-top">
                  <h3>Market overview</h3>
                  <p>Weekly(2021)</p>
                </div>
                <div className="market-chart mt-3">
                  <MarketOverViewChart />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="card">
                <div className="card-top">
                  <h3>Sell Order</h3>
                  <button className='transparent-btn ripple'>
                    <svg class="three-dots-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreVertIcon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                </div>
                <div className="table mt-3">
                  <div className="table-content">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <th scope='col'>Price</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          { tableData.map((data, index) => (
                            <tr key={ index }>
                              <td>{ data.price }</td>
                              <td>{ data.amount }</td>
                              <td>{ data.total }</td>
                            </tr>
                          )) }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="card mt-3">
                <div className="card-top">
                  <h3>Recent Activities</h3>
                  <p>View All</p>
                </div>
                <div className="table mt-3">
                  <div className="table-content">
                    <div className="table-responsive">
                      <table width="100%">
                        <tbody>
                          { recentActivities.map((data, index) => (
                            <tr key={ index }>
                              <td>
                                <svg className="arrow-rotate" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallMadeIcon">
                                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                                </svg>
                              </td>
                              <td>{ data.amount }</td>
                              <td>{ data.total }</td>
                              <td>{ data.total }</td>
                              <td>{ data.total }</td>
                            </tr>
                          )) }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="card mt-3">
                <div className="card-top">
                  <h3>Market Cap</h3>
                  <p>View All</p>
                </div>
                <div className="table mt-3">
                  <div className="table-content">
                    <div className="table-responsive">
                      <table width="100%">
                        <tbody>
                            <tr>
                              <td>Bitcoin</td>
                              <td>
                                <div className="centre-content">
                                  <svg className="arrow-rotate" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallMadeIcon">
                                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                                  </svg>
                                  <p>3.8%</p>
                                  <BtcChart height="60" />
                                </div>
                              </td>
                              <td>$1500</td>
                            </tr>
                            <tr>
                              <td>Ethereum</td>
                              <td>
                                <div className="centre-content">
                                  <svg className="arrow-rotate" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallMadeIcon">
                                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                                  </svg>
                                  <p>3.8%</p>
                                  <EthChart height="60" />
                                </div>
                              </td>
                              <td>$1500</td>
                            </tr>
                            <tr>
                              <td>Litecoin</td>
                              <td>
                                <div className="centre-content">
                                  <svg className="arrow-rotate" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallMadeIcon">
                                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                                  </svg>
                                  <p>3.8%</p>
                                  <LtcChart height="60" />
                                </div>
                              </td>
                              <td>$1500</td>
                            </tr>
                            <tr>
                              <td>Binance</td>
                              <td>
                                <div className="centre-content">
                                  <svg className="arrow-rotate" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallMadeIcon">
                                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                                  </svg>
                                  <p>3.8%</p>
                                  <BnbChart height="60" />
                                </div>
                              </td>
                              <td>$1500</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


