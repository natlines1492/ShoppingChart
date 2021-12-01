
// src/App.js

import GlobalStyle from "./components/GlobalStyle";
import Layout from "./components/Layout";
import Home from "./pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Layout>
          <Home/>
        </Layout>
      </div>
    </>
  );
}

export default App;