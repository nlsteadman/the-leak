import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductLocationCard from './ProductLocationCard';
import { MyContext } from '../context/MyContext';

const Product = () => {
    const {products} = useContext(MyContext);

    const { id } = useParams()
    const [product, setProducts] = useState({ locations: [] });

    useEffect(() => {
        if (products) {
            setProducts(products.find(product => product.id.toString() === id));
        }
    }, [products, id])
    
    const productInfo = () => {
        if (product) {
            return (
                <div>
                    <h2>All { product.supply } Locations</h2>
                </div>
            )
        }
    }

    const locationCards = () => {
        if (product) {
            return product.locations.map(location => <ProductLocationCard key={ location.id } location={ location } />)
        }
    }

  return (
    <div>
        <div id="product-locations">
            { productInfo() }
        </div>
        <br/>
        <div>
            { locationCards() }
        </div>
    </div>
  )
}

export default Product;