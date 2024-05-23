import rightArrow from '../../../../icon/right-arrow.svg'
import leftArrow from '../../../../icon/left-arrow.svg'
import './index.scss'

const StepControlButtons = ({ currentStep, nextStep, prevStep }) => {
  let buttonsClassName = 'control-buttons'
  if (currentStep === 1) {
    buttonsClassName += ' active'
  }
  return (
    <div className={buttonsClassName}>
      {currentStep > 1 &&
        <button onClick={prevStep}>
          <img src={leftArrow} alt="Arrow" className='left-arrow' /> 上一步
        </button>}
      {currentStep < 3 &&
        <button onClick={nextStep}>
          下一步<img src={rightArrow} alt="Arrow" className='right-arrow' />
        </button>}
      {currentStep === 3 && <button>確認下單</button>}
    </div>
  )
}

export default StepControlButtons