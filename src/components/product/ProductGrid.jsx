import { useProducs } from "../../hooks";
import { ProductCart } from "./ProductCart";

import "./ProductGrid.css";

 

export const ProductGrid = () => {
  const { products } = useProducs()
   
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCart
         key={product.id} 
         product={product} />
      ))}
    </div>
  )
}
