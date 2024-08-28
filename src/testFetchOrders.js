import { fetchOrders } from './shopify.js';

fetchOrders()
  .then(data => console.log('Orders:', data))
  .catch(err => console.error('Error:', err));
