import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import Categories from "./components/Categories";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Brands />
      <Categories />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
