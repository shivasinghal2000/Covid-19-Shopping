import React, {useEffect} from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function EmptyBasket ({id, image, title, price, rating ,hideButton}) {
  const [{ basket, user }, dispatch] = useStateValue()
//   const removeFromBasket = () => {
//     // remove the item from basket
//     dispatch({
//       type: 'REMOVE_FROM_BASKET',
//       id: id
//     }
//     )
//   }
  return (
    <div>
        {basket?.map(item => (
            dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
            }
            )
        ))}
    </div>
  )
}

export default EmptyBasket
