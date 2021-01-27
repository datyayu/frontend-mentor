import CheckIcon from "../../images/icon-check.svg";

export function CTAInfo() {
  return (
    <div className="cta-info">
      <div className="cta-info-benefits">
        <ul className="cta-info-benefits-list">
          <li className="cta-info-benefit">
            <img
              className="cta-info-benefit-icon"
              src={CheckIcon}
              alt="Checked"
            />
            <span className="cta-info-benefit-text">Unlimited websites</span>
          </li>
          <li className="cta-info-benefit">
            <img
              className="cta-info-benefit-icon"
              src={CheckIcon}
              alt="Checked"
            />
            <span className="cta-info-benefit-text">100% data ownership</span>
          </li>
          <li className="cta-info-benefit">
            <img
              className="cta-info-benefit-icon"
              src={CheckIcon}
              alt="Checked"
            />
            <span className="cta-info-benefit-text">Email reports</span>
          </li>
        </ul>
      </div>
      <div className="cta-info-cta">
        <button className="cta-info-cta-button">Start my trial</button>
      </div>
    </div>
  );
}
