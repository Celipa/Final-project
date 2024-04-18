import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/OrdersPage.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = () => !!localStorage.getItem('token');
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          throw new Error('Failed to fetch orders');
        }


        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        if (!token) {
          //Hide the orders page and order page link if the user is not logged in
          return null;
          
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="OrdersPage">
  <h1>Orders Page</h1>
  {orders.map((order, index) => (
    <div key={index} className="order">
      <h2>Order Number: {order._id}</h2>
      <ul>
        {order.products.map((product, index) => (
          <li key={index}>
            <h3>{product.product.name}</h3>
            <p>Price: {product.product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Summed up price: {product.product.price * product.quantity} :-</p>
          </li>
        ))}
      </ul>
      <p className="total">Total Price: {order.totalPrice} :-</p>
      <p className="total-items">Total Items: {order.products.reduce((total, product) => total + product.quantity, 0)}</p>
    </div>
  ))}
</div>
  );
};

export default OrdersPage;