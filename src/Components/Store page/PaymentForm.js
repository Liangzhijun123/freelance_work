import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CustomCardElement.css'; // Import custom styles

const CustomCardElement = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentStatus(`Error: ${error.message}`);
    } else {
      setPaymentStatus(`Payment Method Created: ${paymentMethod.id}`);
      // Handle payment method
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <button type="button" onClick={toggleMobileMenu}>
        Buy Now
      </button>
      <div className={`card-inputs ${showMobileMenu ? 'show' : ''}`}>
        {showMobileMenu && (
          <>
            <CardElement options={{ hidePostalCode: true }} />
            <button type="submit" disabled={!stripe}>
              Submit Payment
            </button>
          </>
        )}
      </div>
      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </form>
  );
};

export default CustomCardElement;
