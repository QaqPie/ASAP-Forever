import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const products = [
  { id: 1, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/519dOFr27RL._AC_UL1500_.jpg', price: 20 },
  { id: 2, name: 'Hoodie', image: 'https://cdn.clothbase.com/uploads/d8cc6fb4-c676-4c91-b818-633709e5da37/image.jpg', price: 40 },
  { id: 3, name: 'Cap', image: 'https://i.pinimg.com/originals/49/d8/81/49d881dea9d31ab2b6ec1731cc8e1d98.jpg', price: 15 },
  { id: 4, name: 'Jacket', image: 'https://images.squarespace-cdn.com/content/v1/5aaf41dd3c3a53cc58416c61/1571444976134-P0WA7PA33TSY30CDWB5A/ke17ZwdGBToddI8pDm48kM19vGfAY4CpRvzWg9j4Rs97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ucs6qC7sr7nMoIk6RghKQ5zqaVLBrlbIpJKi9eKqHOg0LjA7Zh6OR0YZYaXtoY39jA/rafsimonsss2003consumedblazerfront.jpg', price: 60 },
  { id: 5, name: 'Sneakers', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Frick-owens-drkshdw-spring-summer-2022-collection-hbx-release-info-001.jpg?cbr=1&q=90', price: 80 },
  { id: 6, name: 'Backpack', image: 'https://st.tsum.com/btrx/i/11/94/13/21/01_640_square.jpg', price: 50 },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [size, setSize] = useState('');

  const handleAddToCart = () => {
    if (size) {
      addToCart({ ...product, size });
      alert(`${product.name} (Size: ${size}) added to cart.`);
    } else {
      alert('Please select a size');
    }
  };

  return (
    <div className="product-detail">
      <Link to="/merch">Back to Merch</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <div className="size-selection">
        <label>Select size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
