import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import  Home from "./pages/Home";
import  Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
