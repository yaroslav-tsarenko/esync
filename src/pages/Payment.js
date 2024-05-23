import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <section className="httpsyesimapppayment-1">
        <div className="link-home-parent">
          <a
            className="link-home1"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-2"
            target="_blank"
          >
            Home
          </a>
          <div className="svg-container">
            <img className="svg-icon1" loading="lazy" alt="" src="/svg.svg" />
          </div>
          <a
            className="link-payment"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-16362"
            target="_blank"
          >
            Payment
          </a>
        </div>
        <div className="heading-1-payment-wrapper">
          <div className="heading-11">Payment</div>
        </div>
        <div className="item-visa-mastercard-debit-wrapper">
          <div className="item-visa-container">
            <p className="visa-mastercard-debit">
              Visa, MasterCard debit and credit cards
            </p>
            <p className="paypal-minimum-payment">
              PayPal (minimum payment amount 1 EUR)
            </p>
            <p className="google-pay-android">Google Pay (Android app only)</p>
            <p className="apple-pay-ios">Apple Pay (iOS app only)</p>
            <p className="binance-pay">Binance Pay</p>
            <p className="stripe">Stripe</p>
            <p className="alipay-minimum-payment">
              AliPay (minimum payment amount 1 EUR)
            </p>
            <p className="sofortklarna-minimum-payment">
              Sofort/Klarna (minimum payment amount 1 EUR)
            </p>
            <p className="ycoins-globalesync-app">
              Ycoins (GlobaleSync app reward currency)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
