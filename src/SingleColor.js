import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ hexColor, weight, rgb, index }) => {
  const [message, setMessage] = useState(false);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeToHideMsg = setTimeout(() => {
      setMessage(false);
    }, 3000);
    return () => clearTimeout(timeToHideMsg);
  }, [message]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `${hexValue}` }}
      onClick={() => {
        setMessage(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {message && <p className='alert'> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
