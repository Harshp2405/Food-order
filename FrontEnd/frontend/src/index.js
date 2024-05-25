
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import { Cart } from './Pages/Cart/Cart';
import { Header } from './Components/Header';
import { Home } from './Pages/Home/Home';
import { PlaceOrder } from './Pages/PlaceOrder/PlaceOrder';
import { Navbar } from './Components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<PlaceOrder />} />
          <Route path="contact" element={<Cart />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
</>
);

reportWebVitals();
