import Stripe from 'stripe';

const stripeApiVersion = '2025-12-15.clover' as const;

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('Stripe secret key not configured. Payment features will be disabled.');
    return null;
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: stripeApiVersion,
  });
};

export const stripe = getStripe();
