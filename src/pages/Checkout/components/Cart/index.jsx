import './index.scss'

const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const Cart = () => {
  return (
    <div className='card-container'>
      <h3>購物籃</h3>
      {data.map(({ id, name, img, price, quantity }) => {
        return (

          <div className='card-group'>
            <div className="left-side">
              <div><img src={img} alt="" /></div>
              <div className='name-container'>
                <p>{name}</p>
                <div className='quantity-control'>
                  <button>-</button>
                  <p>{quantity}</p>
                  <button>+</button>
                </div>
              </div>
            </div>

            <div className='right-side'>
              <p>${price}</p>

            </div>
          </div>
        )
      })}
      <div className='feed'>
        <p>運費</p>
        <p>免費</p>
      </div>
      <div className='total-price'>
        <p>小計</p>
        <p>$500</p>
      </div>
    </div>
  )



}

export default Cart