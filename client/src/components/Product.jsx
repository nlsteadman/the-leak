import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductLocationCard from './ProductLocationCard';

const Product = ({ loggedIn, products }) => {
    const { id } = useParams()
    const [product, setProducts] = useState({ locations: [] });

    useEffect(() => {
        if (loggedIn) {
            setProducts(products.find(product => product.id.toString() === id));
        }
    }, [loggedIn, products, id])
    
    const productInfo = () => {
        if (product) {
            return (
                <div>
                    <h2>All { product.supply } locations</h2>
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
        <div>
            { productInfo() }
        </div>
        <div>
            { locationCards() }
        </div>
    </div>
  )
}

export default Product;