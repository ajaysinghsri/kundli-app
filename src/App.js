import React from 'react';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Zodiac from './component/zodiac';
import Kundalichart from './pages/kundalichart';
import Number from './component/number';



function App() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='mt-4' style={{ width: "110px", height: "600px" }}>
          <div className='d-flex'>
            <div>
              <Number  value={1}/>
              <Number  value={2}/>
              <Number  value={3}/>
              <Number  value={4}/>
              <Number  value={5}/>
              <Number  value={6}/>
              <Number  value={7}/>
              <Number  value={8}/>
              <Number  value={9}/>
              <Number  value={10}/>
              <Number  value={11}/>
              <Number  value={12}/>
              
            </div>
            <ol className='list-unstyled p-2'>
              <Zodiac name='सूर्य'  />
              <Zodiac name='चंद्रमा' />
              <Zodiac name='मंगल' />
              <Zodiac name='बुध' />
              <Zodiac name='बृहस्पति' />
              <Zodiac name='शुक्र' />
              <Zodiac name='शनि' />
              <Zodiac name='राहु' />
              <Zodiac name='केतु' />
              {/* <Zodiac name='Capricorn' />
              <Zodiac name='Aquarius' />
              <Zodiac name='Pisces' /> */}
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
