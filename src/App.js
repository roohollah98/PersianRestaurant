import {BrowserRouter as Router} from 'react-router-dom'

import {GlobalStyle} from './Global'
import Top from './components/Top/index'
import Product from './components/Products';
import { ProductData,ProductData2} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Top/>
    <Product data={ProductData}/>
    <Feature/>
    <Product data={ProductData2}/>
    <Footer/>
    </Router>
  );
}

export default App;
