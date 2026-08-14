import React from 'react';
import './CreditCard.css';

function CreditCard({ formData = {} }) {
  const {
    cardholderName = '',
    cardNumber = '',
    expiryMonth = '',
    expiryYear = '',
    cvc = '',
  } = formData;

  // Format card number display with fallback
  const displayNumber = cardNumber.trim() ? cardNumber : '0000 0000 0000 0000';
  const displayName = cardholderName.trim()
    ? cardholderName.toUpperCase()
    : 'JANE APPLESEED';
  const displayExpiry = `${expiryMonth.trim() || '00'}/${
    expiryYear.trim() || '00'
  }`;
  const displayCvc = cvc.trim() ? cvc : '000';

  return (
    <div className="cards-wrapper">
      {/* FRONT CARD */}
      <div className="card card-front">
        <div className="card-front-content">
          {/* Card Brand / Circles */}
          <div className="card-icons">
            <div className="card-circle-main" />
            <div className="card-circle-sub" />
          </div>

          {/* Card Number */}
          <div className="card-number" id="preview-card-number">
            {displayNumber}
          </div>

          {/* Card Footer (Name & Expiry) */}
          <div className="card-footer">
            <span className="card-name" id="preview-card-name">
              {displayName}
            </span>
            <span className="card-expiry" id="preview-card-expiry">
              {displayExpiry}
            </span>
          </div>
        </div>
      </div>

      {/* BACK CARD */}
      <div className="card card-back">
        <div className="card-back-stripe" />
        <div className="card-back-cvc-container">
          <span className="card-back-cvc" id="preview-card-cvc">
            {displayCvc}
          </span>
        </div>
        <div className="card-back-lines">
          <div className="back-line line-1" />
          <div className="back-line line-2" />
          <div className="back-line line-3" />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
