const express = require('express');
const router = express.Router();
const stripeLib = require('stripe');
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY);

router.get('/stripe-key', (req, res) => {
  res.json({ publicKey: process.env.STRIPE_PUBLIC_KEY }); // Send public key to frontend
});

// Create PaymentIntent route
router.post('/payment_intent', async (req, res) => {
  try {
    // Get payment details from request body, e.g., amount
    const { amount } = req.body;

    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Set the currency
      payment_method_types: ['card'], // Restrict to card payments only
    });

    // Send the client secret back to the frontend
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
