import React from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <h1 className='title'>Your Favourite Collections</h1>
        <div className='product-grid'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home;
