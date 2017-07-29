import React from 'react';
import {Link} from 'react-router-dom';
import {QUICK_LINKS} from '../footer.constants';

export const QuickLink = () => (
  <ul className="inline-list footer-quick-links">
    {QUICK_LINKS.map(links => (
      <li key={links.displayName}><Link to={links.link}>{links.displayName}</Link></li>
    ))}
  </ul>
)
