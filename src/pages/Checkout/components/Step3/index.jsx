import './index.scss'

const Step3 = () => (
  <div className="step-content">
    <h2>付款資訊</h2>
    <form className='payment-form'>

      <div className='payment-info'>
        <label>持卡人姓名</label>
        <input type="text" id='name' placeholder='John Doe' />
      </div>

      <div className='payment-info'>
        <label>卡號</label>
        <input type="text" id='card' placeholder='1111 2222 3333 4444' />
      </div>

      <div className='payment-group'>
        <div className='payment-expired'>
          <label>有效期限</label>
          <input type="text" id='expired' placeholder='MM/YY' />
        </div>

        <div className='payment-secret'>
          <label>CVC / CCV</label>
          <input type="text" id='secret' placeholder='123' />
        </div>
      </div>
    </form>
  </div>
);

export default Step3