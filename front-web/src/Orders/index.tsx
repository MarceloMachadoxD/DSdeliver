import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Products } from './types';


function Orders() {

   const [products, setProducts] = useState<Products[]>([]);
   // console.log(products);

   useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))


   }, [

   ]

   );

   return (
      <div className="orders-container">
         <StepsHeader />
         <ProductsList products={products}  />
      </div>

   )

}

export default Orders;