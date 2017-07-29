import React from 'react';
import './footer.css';

import {QuickLink} from './quick-links/quick-links';
import {Copyright} from './copyright/copyright';
import {SocialConnects} from './social-connects/social-connects';
import {GetApp} from './get-app/get-app';
export const Footer = () => (
  <footer className="footer">
    <QuickLink />
    <Copyright />
    <SocialConnects />
    <GetApp />
  </footer>
)
