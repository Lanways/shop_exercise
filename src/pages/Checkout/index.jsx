import './index.scss'
import { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import StepControlButtons from './components/StepControlButtons';
import Cart from './components/Cart';


const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (

    <div className="checkout-page">
      <div className='checkout-text'><h1>結帳</h1></div>
      <div className='main'>
        <div className="checkout-container">
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
        <Cart />
      </div>
    </div>

  );
};

export default Checkout;