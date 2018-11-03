import React from 'react';

import './style.css';

export default ({ children, className }) => (
  <div className={['card', className].join(' ')}>{children}</div>
);
