import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { API_End_Points } from './Constants';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_End_Points.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log('API End Point :', res)
        setProducts(res.products);
      })
  }, [])

  return (
    <div className="App">
      <h1>Welcome to VibeTrends</h1>
      <AppRouter products={products} />
    </div>
  );
}

export default App;
