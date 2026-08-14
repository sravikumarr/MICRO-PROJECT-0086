import React from 'react';
import './SuccessState.css';

function SuccessState({ onReset }) {
  return (
    <div className="success-state">
      <div className="success-icon-container">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="40" cy="40" r="40" fill="url(#successGradient)" />
          <path
            d="M28 40L36.5 48.5L52 33"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="successGradient"
              x1="0"
              y1="0"
              x2="80"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6348FE" />
              <stop offset="1" stopColor="#610595" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="success-title">THANK YOU!</h1>
      <p className="success-subtitle">We've added your card details</p>

      <button
        type="button"
        id="continue-button"
        className="continue-button"
        onClick={onReset}
      >
        Continue
      </button>
    </div>
  );
}

export default SuccessState;
