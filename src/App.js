import "./App.css";
import { ContentBox } from "./components/ContentBox";
import { CTAInfo } from "./components/CTAInfo";
import { Header } from "./components/Header";
import { PricingForm } from "./components/PricingForm";
import BGPatternSVG from "./images/bg-pattern.svg";

function App() {
  return (
    <div className="app">
      <img
        src={BGPatternSVG}
        className="app-background"
        alt="Background pattern"
        aria-hidden="true"
      />
      <div className="app-content">
        <Header />

        <ContentBox>
          <PricingForm />
          <div className="app-form-divider"></div>
          <CTAInfo />
        </ContentBox>
      </div>
    </div>
  );
}

export default App;
