import DiscountOptions from "../components/DiscountOptions";
import CheckoutDetails from "../components/CheckoutDetails";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <header className="your-cart-parent">
        <h2 className="your-cart">Your Cart</h2>
        <div className="indulge-your-furry">
          we look forward to many more moments of happiness and connection in
          the pawsome journey ahead.
        </div>
      </header>
      <section className="cart-content">
        <div className="discounts">
          <DiscountOptions />
          <CheckoutDetails />
        </div>
      </section>
    </div>
  );
};

export default Cart;
