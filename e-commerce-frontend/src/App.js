import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import UserTypeSelection from "./Pages/UserTypeSelection";
import SellerDashboard from "./Pages/SellerDashboard";
import SellerAddProduct from "./Pages/SellerAddProduct";
import SellerProducts from "./Pages/SellerProducts";

function App() {
  const userRole = localStorage.getItem('user-role') || 'buyer';

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/user-types" element={<UserTypeSelection />} />
          <Route path="/seller" element={<SellerDashboard />} />
          {userRole === 'seller' && (
            <>
              <Route path="/seller/add-product" element={<SellerAddProduct />} />
              <Route path="/seller/products" element={<SellerProducts />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/user-types" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;