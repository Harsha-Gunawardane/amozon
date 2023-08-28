import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<ProductInfo />} />
        <Route path="/cart/:id?" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
