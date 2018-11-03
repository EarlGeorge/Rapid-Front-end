import './jquery/main';
import 'bootstrap';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();


document.addEventListener('scroll', function (onScroll) {
  // eslint-disable-next-line no-param-reassign
  onScroll = window.pageYOffset;
  document.getElementById('aboutBootstrap').style.opacity = -onScroll / 2000 + 0.9;
});


// // Create a Stripe client / Key
// const stripe = Stripe('pk_test_5484686143468123574877');

// // Create an instance of Elements.
// const elements = stripe.elements();
// // Custom styling can be passed to options when creating an Element.
// // (Note that this demo uses a wider set of styles than the guide below.)
// const style = {
//   base: {
//     color: '#32325d',
//     lineHeight: '18px',
//     fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//     fontSmoothing: 'antialiased',
//     fontSize: '16px',
//     '::placeholder': {
//       color: '#aab7c4',
//     },
//   },
//   invalid: {
//     color: '#fa755a',
//     iconColor: '#fa755a',
//   },
// };

// // Create an instance of the card Element.
// const card = elements.create('card', { style });

// // Add an instance of the card Element into the `card-element` <div>.
// card.mount('#card-element');

// // Handle real-time validation errors from the card Element.
// card.addEventListener('change', function (event) {
//   const displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });

// // Handle form submission.
// const form = document.getElementById('payment-form');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   stripe.createToken(card).then(function (result) {
//     if (result.error) {
//       // Inform the user if there was an error.
//       const errorElement = document.getElementById('card-errors');
//       errorElement.textContent = result.error.message;
//     } else {
//       // Send the token to your server.
//       stripeTokenHandler(result.token);
//     }
//   });
// });
