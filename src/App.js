import React, { useState } from 'react';
import './App.css';
import CardForm from './components/CardForm';
import CreditCard from './components/CreditCard';

function App() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Cardholder name
    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = "Can't be blank";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.cardholderName.trim())) {
      newErrors.cardholderName = 'Wrong format, letters only';
    }

    // Card number
    const rawNumber = formData.cardNumber.replace(/\s+/g, '');
    if (!rawNumber) {
      newErrors.cardNumber = "Can't be blank";
    } else if (!/^\d+$/.test(rawNumber)) {
      newErrors.cardNumber = 'Wrong format, numbers only';
    } else if (rawNumber.length !== 16) {
      newErrors.cardNumber = 'Must be 16 digits';
    }

    // Expiry Month
    if (!formData.expiryMonth.trim()) {
      newErrors.expiryMonth = "Can't be blank";
    } else {
      const monthNum = parseInt(formData.expiryMonth, 10);
      if (isNaN(monthNum) || monthNum < 1 || monthNum > 12 || formData.expiryMonth.length !== 2) {
        newErrors.expiryMonth = 'Must be 01-12';
      }
    }

    // Expiry Year
    if (!formData.expiryYear.trim()) {
      newErrors.expiryYear = "Can't be blank";
    } else if (formData.expiryYear.length !== 2) {
      newErrors.expiryYear = 'Must be 2 digits';
    }

    // CVC
    if (!formData.cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    } else if (formData.cvc.length !== 3) {
      newErrors.cvc = 'Must be 3 digits';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setShowToast(true);
    }
  };

  return (
    <div className="app-container">
      <div className="card-section">
        <CreditCard formData={formData} />
      </div>

      <div className="form-section">
        <CardForm
          formData={formData}
          errors={errors}
          onChange={handleFieldChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
