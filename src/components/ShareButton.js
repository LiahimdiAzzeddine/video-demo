import React from 'react';

const ShareButton = ({ href, className, tooltip, children }) => {
  return (
    <li>
      <a 
        className={`mb-2 d-flex justify-content-center align-items-center ${className}`} 
        href={href}
        data-toggle="tooltip"
        data-placement="left"
        title={tooltip}
      >
        {children}
      </a>
    </li>
  );
};

export default ShareButton;
