import './App.css';
import Nav from './components/Nav';
import Box from './components/Box';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import ProductState from './context/products/ProductState';


const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(products => setProducts(products))
  }, []);

  return (
    <ProductState> 
      <Nav />
      <div className="App container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <Box {...props} products={products} />} />
            <Route path="/addproducts" component={ProductList} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </ProductState>
  );
}

export default App;
