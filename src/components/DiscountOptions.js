import DiscountCategories from "./DiscountCategories";
import PropTypes from "prop-types";
import "./DiscountOptions.css";

const DiscountOptions = ({ className = "" }) => {
  return (
    <div className={`discount-options ${className}`}>
      <div className="header">
        <div className="header-child" />
        <div className="table-header-columns">
          <div className="product">Product</div>
        </div>
        <div className="table-header-columns1">
          <div className="price">Price</div>
        </div>
        <div className="quantity">Quantity</div>
        <div className="total">Total</div>
      </div>
      <DiscountCategories categories="/frame-1000006755@2x.png" food="Food" />
      <DiscountCategories categories="/frame-1000006755-1@2x.png" food="Car" />
      <DiscountCategories
        categories="/frame-1000006755-2@2x.png"
        food="Travels"
      />
      <div className="table-actions">
        <div className="table-divider" />
        <div className="table-buttons">
          <button className="button7">
            <img className="tag-icon4" alt="" src="/tag-icon.svg" />
            <b className="button8">Go Back</b>
            <img className="tag-icon5" alt="" src="/tag-icon.svg" />
          </button>
          <button className="button9">
            <img className="tag-icon6" alt="" src="/tag-icon.svg" />
            <div className="button10">Checkout</div>
            <img className="tag-icon7" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

DiscountOptions.propTypes = {
  className: PropTypes.string,
};

export default DiscountOptions;
