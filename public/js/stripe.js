/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const Stripe = require('stripe');

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51NIrSIDUKXTc3xJxyQ5uwXo5KJs6j5xDY0nuITsEk7omi5x2JanlgbvBowNeL66PitAxdl7HzoRyRwQR6SfqxK6Q00SC041i6w'
  );

  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + charge credit card
    window.location.assign(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
