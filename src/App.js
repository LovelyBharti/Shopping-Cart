import './App.css';
import Layout from './components/Layout';
import Home from './pages/home';
import Detail from './pages/detail';
import Checkout from './pages/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderConfirmation from './components/OrderConfirmation'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;