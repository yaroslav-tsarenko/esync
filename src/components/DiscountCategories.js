import "./DiscountCategories.css";

const DiscountCategories = ({ className = "", categories, food }) => {
  return (
    <div className={`discount-categories ${className}`}>
      <img className="categories-icon" loading="lazy" alt="" src={categories} />
      <div className="discount-types">
        <b className="food">{food}</b>
        <div className="discount-20-off">Discount: 20% OFF</div>
      </div>
      <div className="credit-categories">
        <b className="empty-credits">$120.00</b>
        <b className="credits">12 Credits</b>
      </div>
      <div className="credit-options">
        <div className="credit-actions">
          <div className="credit-add">
            <img
              className="icon-plus"
              loading="lazy"
              alt=""
              src="/iconplus.svg"
            />
          </div>
          <div className="empty-add">3</div>
          <div className="credit-remove">
            <img
              className="icon-minus"
              loading="lazy"
              alt=""
              src="/iconminus.svg"
            />
          </div>
        </div>
        <div className="credit-durations">
          <div className="hourly">Hourly</div>
          <div className="duration-options">
            <img
              className="empty-durations-icon"
              alt=""
              src="/empty-durations.svg"
            />
          </div>
        </div>
      </div>
      <b className="empty-header">$120.00</b>
    </div>
  );
};

DiscountCategories.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.string,
  food: PropTypes.string,
};

export default DiscountCategories;
