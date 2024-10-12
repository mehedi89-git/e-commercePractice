import { useContext } from "react";

import { CartContext } from "../../contexts";

import "./ProductCart.css";



   export const ProductCart = ({ product }) => {
      const { addProductToCart } = useContext(CartContext)

      const handleAddProductToCart = () => {
        addProductToCart(product)
      }

      return (
        <div className="productCart">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s"
           alt="product-img"
           width="300px" />
          <p>{product.name}</p>
          <p>{`$${product.price}`}</p>
          <button className="b1" onClick={handleAddProductToCart}>
            Add to Cart
          </button>
        </div>
    
  )
}
