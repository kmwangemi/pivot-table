import './product.css'

const Product = ({ item }) => {
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Category</th>
                  <th>Sub-Category</th>
                  <th>STATES</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>text1.1</td>
                  <td>text1.2</td>
                  <td>text1.3</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td>Sum</td>
                  <td>$180</td>
               </tr>
            </tfoot>
         </table>
      </div>
   )
}

export default Product
