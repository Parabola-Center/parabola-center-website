    // require('dotenv').config();

    (function() { 
      // Test Key
      // var stripe = Stripe('pk_test_51L34DVCeHdK1kOc2SS6AHeglZpXwbO4DwaCvPPbJ7ENpoPxM8Vwbj2BiZOG7WHL3gddZE3qtOZHAExrdOAcdTYtD00DSHu862O');
      // var checkoutButton = document.getElementById('checkout-button-price_1LKnlTCeHdK1kOc2U4GXEiRK');
      
      // Live Key

      var stripe = Stripe('pk_live_51L34DVCeHdK1kOc2mj32u0pKQPVvbB5JYb29ruy1PPfUZJZVLqGqgGp3CTHM0pQfk0fcaKipwChrjfZJc6z46eZs00kVbRSLSw');
      var checkoutButton = document.getElementById('checkout-button-price_1LIxtqCeHdK1kOc2mr38a3RM');

      checkoutButton.addEventListener('click', function () {
        /*
         * When the customer clicks on the button, redirect
         * them to Checkout.
         */
        stripe.redirectToCheckout({
          // Test payment link
          // lineItems: [{price: 'price_1LKnlTCeHdK1kOc2U4GXEiRK', quantity: 1}],
          
          // Live payment link
          lineItems: [{price: 'price_1LIxtqCeHdK1kOc2mr38a3RM', quantity: 1}], 
          mode: 'payment',
          /*
           * Do not rely on the redirect to the successUrl for fulfilling
           * purchases, customers may not always reach the success_url after
           * a successful payment.
           * Instead use one of the strategies described in
           * https://stripe.com/docs/payments/checkout/fulfill-orders
           */
          successUrl: window.location.protocol + '//parabolacenter.com/success',
          cancelUrl: window.location.protocol + '//parabolacenter.com/error',
        })
        .then(function (result) {
          if (result.error) {
            /*
             * If `redirectToCheckout` fails due to a browser or network
             * error, display the localized error message to your customer.
             */
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      });
    })();

    (function() { 
      // Test Key
      // var stripe = Stripe('pk_test_51L34DVCeHdK1kOc2SS6AHeglZpXwbO4DwaCvPPbJ7ENpoPxM8Vwbj2BiZOG7WHL3gddZE3qtOZHAExrdOAcdTYtD00DSHu862O');
      // var checkoutButton = document.getElementById('checkout-button-price_1LKnlTCeHdK1kOc2CNXsAUdV');

      // Live Key
      var stripe = Stripe('pk_live_51L34DVCeHdK1kOc2mj32u0pKQPVvbB5JYb29ruy1PPfUZJZVLqGqgGp3CTHM0pQfk0fcaKipwChrjfZJc6z46eZs00kVbRSLSw');  
      var checkoutButton = document.getElementById('checkout-button-price_1LIxtqCeHdK1kOc2Gk0tJBnm');
      
      checkoutButton.addEventListener('click', function () {
        /*
         * When the customer clicks on the button, redirect
         * them to Checkout.
         */
        stripe.redirectToCheckout({
          // Test payment link
          // lineItems: [{price: 'price_1LKnlTCeHdK1kOc2CNXsAUdV', quantity: 1}],
          
          // Live payment link
          lineItems: [{price: 'price_1LIxtqCeHdK1kOc2Gk0tJBnm', quantity: 1}],
          mode: 'payment',
          /*
           * Do not rely on the redirect to the successUrl for fulfilling
           * purchases, customers may not always reach the success_url after
           * a successful payment.
           * Instead use one of the strategies described in
           * https://stripe.com/docs/payments/checkout/fulfill-orders
           */
          successUrl: window.location.protocol + '//parabolacenter.com/success',
          cancelUrl: window.location.protocol + '//parabolacenter.com/error',
        })
        .then(function (result) {
          if (result.error) {
            /*
             * If `redirectToCheckout` fails due to a browser or network
             * error, display the localized error message to your customer.
             */
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      });
    })();

    (function() { 
      // Test Key
      // var stripe = Stripe('pk_test_51L34DVCeHdK1kOc2SS6AHeglZpXwbO4DwaCvPPbJ7ENpoPxM8Vwbj2BiZOG7WHL3gddZE3qtOZHAExrdOAcdTYtD00DSHu862O');
      // var checkoutButton = document.getElementById('checkout-button-price_1LKnlTCeHdK1kOc2L8IN1zrl');

      // Live Key
      var stripe = Stripe('pk_live_51L34DVCeHdK1kOc2mj32u0pKQPVvbB5JYb29ruy1PPfUZJZVLqGqgGp3CTHM0pQfk0fcaKipwChrjfZJc6z46eZs00kVbRSLSw');
      var checkoutButton = document.getElementById('checkout-button-price_1LIxtqCeHdK1kOc2shJzA8wh');
      
      checkoutButton.addEventListener('click', function () {
        /*
         * When the customer clicks on the button, redirect
         * them to Checkout.
         */
        stripe.redirectToCheckout({
          // Test payment link
          // lineItems: [{price: 'price_1LKnlTCeHdK1kOc2L8IN1zrl', quantity: 1}],
          
          // Live payment link
          lineItems: [{price: 'price_1LIxtqCeHdK1kOc2shJzA8wh', quantity: 1}],
          mode: 'payment',
          /*
           * Do not rely on the redirect to the successUrl for fulfilling
           * purchases, customers may not always reach the success_url after
           * a successful payment.
           * Instead use one of the strategies described in
           * https://stripe.com/docs/payments/checkout/fulfill-orders
           */
          successUrl: window.location.protocol + '//parabolacenter.com/success',
          cancelUrl: window.location.protocol + '//parabolacenter.com/error',
        })
        .then(function (result) {
          if (result.error) {
            /*
             * If `redirectToCheckout` fails due to a browser or network
             * error, display the localized error message to your customer.
             */
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      });
    })();
   