import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Storecontextprovider } from './Context/Storecontext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    <Storecontextprovider>
      <App />
    </Storecontextprovider>
  </BrowserRouter>
</>
);

reportWebVitals();
