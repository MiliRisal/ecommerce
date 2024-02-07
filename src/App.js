// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './MyComponents/ProductList';
import ShoppingCart from './MyComponents/ShoppingCart';
import Account from './MyComponents/Account';
import './styles.css'; // Import the CSS file

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', image: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description 4', image: '/images/product4.jpg' },
    { id: 5, name: 'Product 5', description: 'Description 5', image: '/images/product5.jpg' },
    { id: 6, name: 'Product 6', description: 'Description 6', image: '/images/product6.jpg' },
  ]);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 1, shippingAddress: '' });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const checkout = () => {
    // Implement checkout logic (e.g., show a success message)
    console.log('Checkout completed');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>


{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">AppLogo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart">Shopping Cart</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/account">Account</a>
      </li>
      <li className="nav-item">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </li>
      <li className="nav-item">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </li>
    </ul>
    
  </div>
</nav> */}




        <hr />

        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                checkout={checkout}
              />
            }
          />
          <Route
            path="/account"
            element={<Account user={user} updateUser={updateUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
