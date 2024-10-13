import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState([])
    
    const addProductToCart = (product) => {
      const productIndexInCart = cart.findIndex(
        (cartItem) => cartItem.id === product.id)
        if (productIndexInCart !== -1) {
          cart[productIndexInCart].quantity++
          setCart([...cart])
        } else {
          setCart([...cart, { ...product, quantity: 1}])
        }
    };
  
    const removeProductFromCart = (productId) => {
      const productIndexInCart = cart.findIndex(
        (cartItem) => cartItem.id === productId)
  
        if (productIndexInCart === -1) {
          alert(`product is not present in the cart!!!`)
          return
        }
  
      cart[productIndexInCart].quantity--
      if (cart[productIndexInCart].quantity === 0) {
        const updateCart = cart.filter((cartItem)=> cartItem.id !== productId);
        setCart(updateCart)
        return; 
      }
          setCart([...cart])
    };
  
    return {
      cart,
      addProductToCart,
      removeProductFromCart,
    }
  };