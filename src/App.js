import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Cart from './components/Cart/Cart'


import ThankYou from "./components/ThankYou/ThankYou";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </> 
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <ProductList />
              </Layout>
            }
          />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
