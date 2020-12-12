import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout () {
  const [{ basket ,user}, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://tpc.googlesyndication.com/simgad/10846789476852082521?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlKmu6hR2AtytVxaY_LuEU9XiUJdQ' alt='' />
        <div>
  <h3>Hello, {!user ? 'Guest' : user?.email }</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
