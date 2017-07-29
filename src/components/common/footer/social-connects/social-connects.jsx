import React from 'react';

import {SOCIAL_LINKS} from '../footer.constants';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg'
export const SocialConnects = () => (
  <div className="social-link">
    <ul className="inline-list social-link-list">
      <li key={1}>
        <img src={facebook} alt="stan on facebook" />
      </li>
      <li key={2}>
        <img src={twitter} alt="stan on twitter" />
      </li>
      <li key={3}>
        <img src={instagram} alt="stan on instagram" />
      </li>
    </ul>
  </div>
);
