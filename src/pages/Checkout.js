import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <header className="checkout-parent">
        <h1 className="checkout1">Checkout</h1>
        <div className="indulge-your-furry1">
          we look forward to many more moments of happiness and connection in
          the pawsome journey ahead.
        </div>
      </header>
      <main className="checkout-inner">
        <form className="frame-parent">
          <FrameComponent1 />
          <FrameComponent />
        </form>
      </main>
    </div>
  );
};

export default Checkout;
