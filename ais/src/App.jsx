import "bootstrap/dist/css/bootstrap.min.css";
import HomeProduct from "./components/HomeProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Brands />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
