import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details ${className}`}>
      <input
        className="checkout-header"
        placeholder="Checkout Details"
        type="text"
      />
      <div className="total-values">
        <div className="total-labels">
          <b className="cart-subtotal">Cart Subtotal</b>
          <b className="empty-total">$360.00</b>
        </div>
      </div>
      <div className="tax-details">
        <div className="tax-labels">
          <div className="tax-names">
            <b className="shipping-handling">{`Shipping & Handling`}</b>
            <b className="other-taxes">Other Taxes</b>
          </div>
          <div className="tax-names1">
            <b className="b1">$0.00</b>
            <b className="b2">$0.00</b>
          </div>
        </div>
      </div>
      <div className="tax-divider">
        <div className="tax-divider-child" />
      </div>
      <div className="total-values1">
        <div className="grand-total-parent">
          <b className="grand-total">Grand Total</b>
          <b className="b3">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
