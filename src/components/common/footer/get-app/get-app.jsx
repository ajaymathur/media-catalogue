import React from 'react';

import appStore from './assets/app-store.svg';
import playStore from './assets/play-store.svg';
import windowsStore from './assets/windows-store.svg';
export const GetApp = () => (
  <div className="footer-get-app">
    <ul className="inline-list footer-get-app-list">
      <li>
        <img src={appStore} alt="apple app store"/>
      </li>
      <li>
        <img src={playStore} alt="google play store"/>
      </li>
      <li>
        <img src={windowsStore} alt="microsoft windows store"/>
      </li>
    </ul>
  </div>
)
