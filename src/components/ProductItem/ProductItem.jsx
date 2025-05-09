import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function ProductItem(props) {
    const dispatch = useDispatch();
    const product = props.product;

    function handleAddToCart() {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        }));
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
            </Link>
            <button onClick={handleAddToCart} style={{ marginTop: '10px', padding: '5px 10px' }}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductItem;
