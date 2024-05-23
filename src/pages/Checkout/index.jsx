import './index.scss'
import { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import StepControlButtons from './components/StepControlButtons';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (

    <div className="checkout-container">
      <h1>結帳</h1>
      {/* 將Checkout父組件的狀態(useState)傳遞給子組件(StepIndicator) */}
      <StepIndicator currentStep={currentStep} />
      {/* 短路運算符：如果&&左側表達式為true，則返回右側的表達式 */}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      <StepControlButtons
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
};

export default Checkout;