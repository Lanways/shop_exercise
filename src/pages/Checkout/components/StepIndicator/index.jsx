import './index.scss'

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { label: '寄送地址', step: 1 },
    { label: '運送方式', step: 2 },
    { label: '付款資訊', step: 3 },
  ];

  return (
    <div className="step-indicator">
      {/* 遍歷steps，將當前el的step跟currentStep做比較，在將每個element渲染出來 */}
      {steps.map(({ label, step }, index) => {
        let stepClassName = 'step';
        if (currentStep > step || step === 1) {
          stepClassName += ' active';
        }

        return (
          <div key={step} className={stepClassName}>
            <div className='step'>
              {currentStep > step ? <div className='step-number'>✔</div> : <div className='step-number'>{step}</div>}
              <div className="step-label">{label}</div>
              {index < steps.length - 1 && <div className="separator"></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator