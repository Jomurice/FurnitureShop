

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./component/Home/Home";
import ProductPage from './component/Product/ProductPage';
import ProductDetail from "./component/Product/ProductDetail";

ProductDetail
function App() {


  return (
<div className="flex flex-col min-h-screen">
      <Router>
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
