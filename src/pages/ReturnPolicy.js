import FrameComponent from "../components/FrameComponent";
import "./ReturnPolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="return-policy">
      <main className="cancellation-policy-wrapper">
        <section className="cancellation-policy">
          <div className="cancellation-policy-inner">
            <div className="return-policy-parent">
              <h1 className="return-policy1">Return Policy</h1>
              <div className="frame-parent">
                <FrameComponent
                  refundWindow="Refund Window"
                  youHaveTheOpportunityToCa="You have the opportunity to cancel your order within a specific time frame, usually up to 24 hours from the moment of order placement. This window allows for adjustments or changes to your order. Once this period expires, the order will be processed, and regular return procedures will apply. To initiate a Refund, please reach out to our customer support team with your order details."
                  youCanCancelYourOrderWith="You can cancel your order within 24 hours of placing it."
                  afterTheRefundWindowClose="After the Refund window closes, the order proceeds as planned, subject to standard return policies."
                  contactOurCustomerSupport="Contact our customer support with your order details for Refund requests."
                />
                <FrameComponent
                  refundWindow="Refund Request Process"
                  youHaveTheOpportunityToCa="To cancel an order, please contact our customer support team through the provided channels, which may include email or phone. You will need to provide your order details, such as the order number, product name, and purchase date. Our team will guide you through the Refund process and provide confirmation once the request is successfully processed."
                  youCanCancelYourOrderWith="Reach out to our customer support team to initiate an order Refund."
                  afterTheRefundWindowClose="Include essential order details like the order number, product name, and purchase date."
                  contactOurCustomerSupport="Once the request is approved, you will receive confirmation of the Refund."
                  propDisplay="unset"
                />
                <FrameComponent
                  refundWindow="Refund for Canceled Orders"
                  youHaveTheOpportunityToCa="When a Refund request is approved within the specified window, a refund will be issued for the full purchase amount, including any applicable taxes or fees. The refund will be processed using the original payment method. It may take several business days for the refund to appear in your account, depending on your financial institution's processing times."
                  youCanCancelYourOrderWith="Approved Refund requests within the allowed timeframe result in a full refund."
                  afterTheRefundWindowClose="The refund includes the total purchase amount, including taxes and fees."
                  contactOurCustomerSupport="Refunds will be made via the original payment method and may take a few business days to reflect in your account."
                  propDisplay="inline-block"
                />
                <FrameComponent
                  refundWindow="Non-Cancelable Items"
                  youHaveTheOpportunityToCa="Certain items are non-cancelable due to factors like their perishable nature, customization, or immediate processing. Examples include personalized products or goods with time-sensitive shipping requirements. Such items will be clearly marked as non-cancelable during the purchase process. It's essential to carefully review product details and eligibility before finalizing your order."
                  youCanCancelYourOrderWith="Some products, like personalized or time-sensitive items, are non-cancelable."
                  afterTheRefundWindowClose="Non-cancelable items will be prominently marked during the purchase."
                  contactOurCustomerSupport="Make well-informed choices by reviewing product details and eligibility when ordering."
                  propDisplay="unset"
                />
                <FrameComponent
                  refundWindow="Refund Beyond the Window"
                  youHaveTheOpportunityToCa="If a Refund request is made after the allowed window, the order will typically proceed as planned, and standard return policies will apply. In this case, you may return the product as per our standard return policy once it is delivered to you. We recommend contacting our customer support team for guidance on the return process if the order has already been shipped."
                  youCanCancelYourOrderWith="After the allowed Refund window closes, the order progresses, subject to standard return policies."
                  afterTheRefundWindowClose="If your order has already been shipped, reach out to our customer support for return instructions."
                  contactOurCustomerSupport="Timely communication is essential if you need to address the order after the Refund window."
                  propDisplay="inline-block"
                />
                <FrameComponent
                  refundWindow="Order Modification Option"
                  youHaveTheOpportunityToCa="Instead of canceling, we may offer an order modification option to adjust specific details of your order. This option is subject to the nature of the requested changes and the stage of processing. If modifications are possible, our customer support team will guide you through the process. This can be a convenient alternative, particularly for minor changes to your order."
                  youCanCancelYourOrderWith="Instead of canceling, inquire about order modification options for specific changes."
                  afterTheRefundWindowClose="Modification feasibility depends on the nature and processing stage of the request."
                  contactOurCustomerSupport="Our customer support will assist you in making changes when possible."
                  propDisplay="unset"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReturnPolicy;
