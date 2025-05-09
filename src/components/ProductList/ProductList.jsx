import React, { useState } from 'react';
// import useFetchProducts from '../../hooks/useFetchProducts';
import useFetchProducts from '../hooks/useFetchProducts';

import ProductItem from '../ProductItem/ProductItem';

function ProductList() {
    const { products, error } = useFetchProducts();
    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function filterProducts(product) {
        return product.title.toLowerCase().includes(search.toLowerCase());
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleChange}
            />

            {error && <p>Error: {error}</p>}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {products.filter(filterProducts).map(function (product) {
                    return <ProductItem key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default ProductList;
