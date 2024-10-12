import React, { useContext } from 'react'

import { CartItem } from './CartItem'

import { CartContext } from '../../contexts'

import './Cart.css'




export const Cart = () => {
  const { cart, removeProductFromCart } = useContext(CartContext)

  return (
        <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                <CartItem cartItem={cartItem}
                removeProductFromCart={removeProductFromCart} />
              </li>
            ))}
          </ul>
  )
}
