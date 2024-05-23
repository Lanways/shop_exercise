import './index.scss'

const Step1 = () => (
  <div className="step-content">
    <h2>寄送地址</h2>
    <form action="" className='transport-form'>
      <div className='form-block'>
        <div className="form-group">
          <label htmlFor="title">稱謂</label>
          <select id="title">
            <option value="mr">先生</option>
            <option value="ms">女士</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" placeholder="請輸入姓名" />
        </div>
      </div>

      <div className='form-block'>
        <div className="form-group">
          <label htmlFor="phone">電話</label>
          <input type="text" id="phone" placeholder="請輸入行動電話" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="請輸入電子郵件" />
        </div>
      </div>

      <div className='form-block'>
        <div className="form-group">
          <label htmlFor="city">城市</label>
          <input type="text" id="city" placeholder="請輸入城市" />
        </div>
        <div className="form-group">
          <label htmlFor="address">地址</label>
          <input type="text" id="address" placeholder="請輸入地址" />
        </div>
      </div>
    </form >
  </div >
);

export default Step1