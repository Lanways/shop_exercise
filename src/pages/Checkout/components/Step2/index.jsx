import { useState } from "react";
import './index.scss'

const Step2 = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (

    < div className="step-content" >
      <h2>運送方式</h2>
      <div
        onClick={() => handleOptionChange('standard')}
        className={`shipping-container ${selectedOption === 'standard' ? 'selected' : ''}`}
      >
        <label className='shipping-option'>
          <input type="radio" id="standard" name="shipping" value="standard" />
          <div className='shipping-text'>
            <div>
              <p>標準運送</p>
              <p>約3~7個工作天</p>
            </div>
            <p>免費</p>
          </div>
        </label>
      </div>

      <div
        onClick={() => handleOptionChange('dhl')}
        className={`shipping-container ${selectedOption === 'dhl' ? 'selected' : ''}`}
      >
        <label className='shipping-option'>
          <input type="radio" id="dhl" name="shipping" value="dhl" />
          <div className='shipping-text'>
            <div>
              <p>DHL 運送</p>
              <p>48小時內送達</p>
            </div>
            <p>$500</p>
          </div>
        </label>
      </div>
    </div >
  )
};

export default Step2