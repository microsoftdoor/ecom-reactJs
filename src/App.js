import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import "./index.css"
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </Router>  
    

  );
}

export default App;
