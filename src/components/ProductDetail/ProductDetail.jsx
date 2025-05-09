import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(function () {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(function (res) {
                if (!res.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                return res.json();
            })
            .then(function (data) {
                setProduct(data);
            })
            .catch(function (err) {
                setError(err.message);
            });
    }, [id]);

    function handleAddToCart() {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            }));
        }
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p><strong>Price:</strong> ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleAddToCart} style={{ marginTop: '10px', padding: '5px 10px' }}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetail;

