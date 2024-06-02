import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Merch.css';

const products = [
  { id: 1, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/519dOFr27RL._AC_UL1500_.jpg', price: 20 },
  { id: 2, name: 'Hoodie', image: 'https://cdn.clothbase.com/uploads/d8cc6fb4-c676-4c91-b818-633709e5da37/image.jpg', price: 40 },
  { id: 3, name: 'Cap', image: 'https://i.pinimg.com/originals/49/d8/81/49d881dea9d31ab2b6ec1731cc8e1d98.jpg', price: 15 },
  { id: 4, name: 'Jacket', image: 'https://images.squarespace-cdn.com/content/v1/5aaf41dd3c3a53cc58416c61/1571444976134-P0WA7PA33TSY30CDWB5A/ke17ZwdGBToddI8pDm48kM19vGfAY4CpRvzWg9j4Rs97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ucs6qC7sr7nMoIk6RghKQ5zqaVLBrlbIpJKi9eKqHOg0LjA7Zh6OR0YZYaXtoY39jA/rafsimonsss2003consumedblazerfront.jpg', price: 60 },
  { id: 5, name: 'Sneakers', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Frick-owens-drkshdw-spring-summer-2022-collection-hbx-release-info-001.jpg?cbr=1&q=90', price: 80 },
  { id: 6, name: 'Backpack', image: 'https://st.tsum.com/btrx/i/11/94/13/21/01_640_square.jpg', price: 50 },
];

const Merch = ({ addToCart }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToCart(product);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="merch">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - ${item.price}
          </div>
        ))}
        <button onClick={handlePlaceOrder} className="place-order-button">Place an Order</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/merch/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
