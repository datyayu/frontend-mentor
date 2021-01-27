import { useState } from "react";
import { Slider } from "../Slider";
import { Switch } from "../Switch";

// step: [page views, price]
const BILLING_STEPS = {
  0: ["10K", 8],
  1: ["50K", 12],
  2: ["100K", 16],
  3: ["500K", 24],
  4: ["1M", 36],
};

const BILLING_TYPES = {
  MONTHLY: 0,
  YEARLY: 1,
};

export function PricingForm() {
  const [billingType, setBillingType] = useState(BILLING_TYPES.YEARLY);
  const [step, setStep] = useState(0);

  const [pageviews, price] = BILLING_STEPS[step];
  const finalPrice =
    billingType === BILLING_TYPES.YEARLY ? price * 0.75 : price;

  function onStepChange(event) {
    const { value } = event.target;
    setStep(value);
  }

  function onSwitchToggle(event) {
    const { checked } = event.target;
    const selectedType = checked ? BILLING_TYPES.YEARLY : BILLING_TYPES.MONTHLY;

    setBillingType(selectedType);
  }

  return (
    <div className="pricing-form">
      <div className="pricing-form-plans">
        <span className="pricing-form-plans-pageview">
          {pageviews} PAGEVIEWS
        </span>
        <div className="pricing-form-plans-price desktop-only">
          <span className="pricing-form-plans-price-amount">
            ${finalPrice.toFixed(2)}
          </span>
          <span className="pricing-form-plans-price-text">/ month</span>
        </div>
      </div>

      <Slider stepCount={4} step={step} onStepChange={onStepChange} />

      <div className="pricing-form-plans mobile-only">
        <div className="pricing-form-plans-price">
          <span className="pricing-form-plans-price-amount">
            ${finalPrice.toFixed(2)}
          </span>
          <span className="pricing-form-plans-price-text">/ month</span>
        </div>
      </div>

      <div className="pricing-form-billing">
        <div className="pricing-form-billing-col"></div>
        <div className="pricing-form-billing-col">Monthly Billing</div>
        <div className="pricing-form-billing-col">
          <Switch
            active={billingType === BILLING_TYPES.YEARLY}
            onChange={onSwitchToggle}
          />
        </div>
        <div className="pricing-form-billing-col">Yearly Billing</div>
        <div className="pricing-form-billing-col">
          <span className="pricing-form-billing-discount mobile-only">
            -25%
          </span>
          <span className="pricing-form-billing-discount desktop-only">
            25% discount
          </span>
        </div>
      </div>
      {/* Billing */}
      {/* Discount */}
    </div>
  );
}
