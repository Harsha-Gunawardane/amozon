import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<ProductInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
