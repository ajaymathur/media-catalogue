import React from 'react';

import './header.css';

export const Header = () => (
  <header>
    <div>
      <h1>DEMO Streaming</h1>
    </div>
    <div>
      <button className="header-button-login">
        Log in
      </button>
      <button className="header-button-signup">
        Start your free trial
      </button>
    </div>
  </header>
)
