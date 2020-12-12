import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import EmptyBasket from './EmptyBasket'
import { db } from './firebase'
import Order from './Order'
import './Orders.css'
import { useStateValue } from './StateProvider'

function Orders () {
  const [{basket,user}, dispatch] = useStateValue()
  // const [orders,setOrders] = useState([])
  
  // useEffect(() => {
  //   if(user)
  //   {
  //     db
  //     .collection('users')
  //     .doc(user?.uid)
  //     .collection('orders')
  //     .orderBy('created','desc')
  //     .onSnapshot(snapshot => (
  //       setOrders(snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data
  //       })))))
  //     } else {
  //       setOrders([])
  //     }
     
  // }, [user])
  const removeFromBasket = (id) => {
    // remove the item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    }
    )
  }
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders_order'>
        {basket?.map(item => (
          <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              hideButton
           />
        ))}
      </div>
    </div>
  )
}

export default Orders
