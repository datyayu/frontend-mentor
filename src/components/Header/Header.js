import CirclesPatternSVG from "../../images/pattern-circles.svg";

export function Header() {
  return (
    <div className="header">
      <img
        className="header-background"
        src={CirclesPatternSVG}
        alt="header background"
        aria-hidden="true"
        width="190px"
        height="190px"
      />
      <h1 className="header-title">Simple, traffic-based pricing</h1>
      <h2 className="header-subtitle">
        <span>Sign-up for our 30-day trial. </span>
        <span>No credit card required.</span>
      </h2>
    </div>
  );
}
