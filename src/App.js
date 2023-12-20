import React from 'react';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Zodiac from './component/zodiac';
import Kundalichart from './pages/kundalichart';



function App() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='mt-4' style={{ width: "110px", height: "600px" }}>
          <div>
            <ol className='list-unstyled p-2'>
              <Zodiac name='Aries'  />
              <Zodiac name='Taurus' />
              <Zodiac name='Gemini' />
              <Zodiac name='Cancer' />
              <Zodiac name='Leo' />
              <Zodiac name='Virgo' />
              <Zodiac name='Libra' />
              <Zodiac name='Scorpio' />
              <Zodiac name='Sagittarius' />
              <Zodiac name='Capricorn' />
              <Zodiac name='Aquarius' />
              <Zodiac name='Pisces' />
            </ol>
          </div>

        </div>
        <div>
          <Kundalichart />
        </div>

      </div>

    </>




  );
}

export default App;
