import { items } from '../../data'
import Product from '../product/Product'
import './products.css'

const Products = () => {
   return (
      <div>
         {
            items.map(item => (
               <Product key={item.rowId} item={item} />
            ))
         }

      </div>
   )
}

export default Products
