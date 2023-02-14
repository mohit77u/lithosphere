import React, { useState } from 'react'
// import Header from '../components/Header'
import OverView from '../components/OverView';
import PoolDetails from '../components/PoolDetails';
import AddLiquidity from '../components/AddLiquidity';

export default function Pool() {
  const [tab, setTab] = useState('overview')
  
  return (
    <div className='pool'>
      {/* Header */}
      {/* <Header /> */}

      {/* main content */}
      <section className="top-bar">
        <div className="container">
          <div className="pool-menus">
            <button className={tab === 'overview' ? 'pool-menu-btn active ripple' : 'pool-menu-btn ripple'} onClick={() => {setTab('overview')}}>Overview</button>
            <button className={tab === 'pool' ? 'pool-menu-btn active ripple' : 'pool-menu-btn ripple'} onClick={() => {setTab('pool')}}>Pool Detail</button>
            <button className={tab === 'liquidity' ? 'pool-menu-btn active ripple' : 'pool-menu-btn ripple'} onClick={() => {setTab('liquidity')}}>Add Liquidity</button>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          {/* tab contents */}
          {tab === 'overview' && (
            <OverView />
          )}

          {/* tab contents */}
          {tab === 'pool' && (
            <PoolDetails />
          )}

          {/* tab contents */}
          {tab === 'liquidity' && (
            <AddLiquidity />
          )}
        </div>
      </section>
    </div>
  )
}


