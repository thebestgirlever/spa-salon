import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ContactForm from './components/ContactForm';
import PaymentPage from './components/PaymentPage';
import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter basename="/spa-salon">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="ContactForm" element={<ContactForm />} />
          <Route path="PaymentPage" element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
