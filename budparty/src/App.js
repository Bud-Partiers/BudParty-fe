import React from 'react';
import './App.scss';
import greenBoquet from './images/green-bouquet.jpg';
import roseVase from './images/rose-vase.jpg';
import groupPic from './images/group.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="container">
        <h1 className='title'>Bud Party</h1>
        <div className='cta-images'>
          <img src={roseVase} />
          <img src={greenBoquet} />
        </div>
        <div className="info">
          <h2 className='contact-title'>BOOK A PRIVATE CLASS</h2>
          {/* <a className='msg' href='https://m.me/flowersandclasses?fbclid=IwAR3IgNUGCt8RWVpBAjfbKPDpaM_xgi4r1uMzCJa0_EtgQ5gnPNLlJtieh-E'>Send a Message</a> */}
          <div className='contacts'>

            <div className='item'>
              <label>Phone</label>
              <p>(773) 209-4805</p>
            </div>
            <div className='item'>
              <label>Email</label>
              <p>cmfairygardens@yahoo.com</p>
            </div>

          </div>
          <img className='group-pic' src={groupPic} />
        </div>


      </div>
    </div>
  );
}

export default App;