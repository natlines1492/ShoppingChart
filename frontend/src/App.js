import GlobalStyle from "./components/GlobalStyle";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;