import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Products from "./pages/Products";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
