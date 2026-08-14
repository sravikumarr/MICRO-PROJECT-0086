import React from 'react';
import './CardForm.css';

function CardForm({
  formData,
  errors,
  onChange,
  onSubmit,
}) {
  const { cardholderName, cardNumber, expiryMonth, expiryYear, cvc } = formData;

  const handleNameChange = (e) => {
    const val = e.target.value;
    // Allow only alphabets and spaces
    if (/^[a-zA-Z\s]*$/.test(val)) {
      onChange('cardholderName', val);
    }
  };

  const handleCardNumberChange = (e) => {
    const rawVal = e.target.value.replace(/\s+/g, '');
    // Allow only digits up to 16
    if (/^\d*$/.test(rawVal) && rawVal.length <= 16) {
      // Format with space every 4 digits
      const formatted = rawVal.match(/.{1,4}/g)?.join(' ') || rawVal;
      onChange('cardNumber', formatted);
    }
  };

  const handleExpiryMonthChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 2) {
      onChange('expiryMonth', val);
    }
  };

  const handleExpiryYearChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 2) {
      onChange('expiryYear', val);
    }
  };

  const handleCvcChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 3) {
      onChange('cvc', val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const expDateError = errors.expiryMonth || errors.expiryYear;

  return (
    <form className="card-form" onSubmit={handleSubmit} noValidate>
      {/* CARDHOLDER NAME */}
      <div className="form-group">
        <label htmlFor="cardholder-name" className="form-label">
          CARDHOLDER NAME
        </label>
        <input
          id="cardholder-name"
          type="text"
          name="cardholderName"
          className={`form-input ${errors.cardholderName ? 'input-error' : ''}`}
          placeholder="e.g. Jane Appleseed"
          value={cardholderName}
          onChange={handleNameChange}
          maxLength={30}
          autoComplete="off"
        />
        {errors.cardholderName && (
          <span className="error-message">{errors.cardholderName}</span>
        )}
      </div>

      {/* CARD NUMBER */}
      <div className="form-group">
        <label htmlFor="card-number" className="form-label">
          CARD NUMBER
        </label>
        <input
          id="card-number"
          type="text"
          name="cardNumber"
          className={`form-input ${errors.cardNumber ? 'input-error' : ''}`}
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19}
          autoComplete="off"
        />
        {errors.cardNumber && (
          <span className="error-message">{errors.cardNumber}</span>
        )}
      </div>

      {/* EXP. DATE & CVC ROW */}
      <div className="form-row">
        {/* EXP. DATE (MM/YY) */}
        <div className="form-group exp-group">
          <label className="form-label">EXP. DATE (MM/YY)</label>
          <div className="exp-inputs">
            <input
              id="exp-month"
              type="text"
              name="expiryMonth"
              aria-label="Expiry Month"
              className={`form-input exp-input ${
                errors.expiryMonth ? 'input-error' : ''
              }`}
              placeholder="MM"
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
              maxLength={2}
              autoComplete="off"
            />
            <input
              id="exp-year"
              type="text"
              name="expiryYear"
              aria-label="Expiry Year"
              className={`form-input exp-input ${
                errors.expiryYear ? 'input-error' : ''
              }`}
              placeholder="YY"
              value={expiryYear}
              onChange={handleExpiryYearChange}
              maxLength={2}
              autoComplete="off"
            />
          </div>
          {expDateError && (
            <span className="error-message">{expDateError}</span>
          )}
        </div>

        {/* CVC */}
        <div className="form-group cvc-group">
          <label htmlFor="cvc" className="form-label">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            name="cvc"
            className={`form-input ${errors.cvc ? 'input-error' : ''}`}
            placeholder="e.g. 123"
            value={cvc}
            onChange={handleCvcChange}
            maxLength={3}
            autoComplete="off"
          />
          {errors.cvc && <span className="error-message">{errors.cvc}</span>}
        </div>
      </div>

      {/* CONFIRM BUTTON */}
      <button type="submit" id="confirm-button" className="confirm-button">
        Confirm
      </button>
    </form>
  );
}

export default CardForm;
