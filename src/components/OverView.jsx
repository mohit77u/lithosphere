import React from 'react'

export default function OverView() {
    const tableData = [
        {currencyOne: 'LITHO',currencyTwo: 'USDT', percentage: '0.03%', iconOne: 'icon1.png', iconTwo: 'icons-2.png', tvl: '$11.37m', volume24h: '$36.44', volume7d: '$394.30m'},
        {currencyOne: 'LITHO',currencyTwo: 'BUSD', percentage: '0.04%', iconOne: 'icon1.png', iconTwo: 'icon3.jpg', tvl: '$11.37m', volume24h: '$36.44', volume7d: '$394.30m'},
        {currencyOne: 'LITHO',currencyTwo: 'BNB', percentage: '0.05%', iconOne: 'icon1.png', iconTwo: 'icon4.jpg', tvl: '$11.37m', volume24h: '$36.44', volume7d: '$394.30m'},
        {currencyOne: 'LITHO',currencyTwo: 'USDT', percentage: '0.06%', iconOne: 'icon1.png', iconTwo: 'icons-2.png', tvl: '$11.37m', volume24h: '$36.44', volume7d: '$394.30m'},
    ]
  return (
    <div className='overview'>
        <div className="container">
            <h2>Top Pools</h2>
            <div className="table-content">
                <div className="table-responsive">
                    <table width="100%">
                        <thead>
                            <tr>
                                <th scope='col' width="5%">#</th>
                                <th scope='col' width="35%">Pool</th>
                                <th scope='col' width="20%">TVL</th>
                                <th scope='col' width="20%">VOLUME 24H</th>
                                <th scope='col' width="20%">VOLUME 7D</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        <div className="currency-details">
                                            <div className="icons">
                                                <img src={"/images/" + data.iconOne} alt={data.currencyOne} />
                                                <img src={"/images/" + data.iconTwo} alt={data.currencyTwo} />
                                            </div>
                                            <div className="currency-name">
                                                <p>{data.currencyOne}/{data.currencyTwo}</p>
                                            </div>
                                            <div className="percentage">
                                                <span>{data.percentage}</span>
                                            </div>
                                        </div>
                                        </td>
                                    <td>{data.tvl}</td>
                                    <td>{data.volume24h}</td>
                                    <td>{data.volume7d}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
