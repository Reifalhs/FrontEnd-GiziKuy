import Home from "./pages/Home";
import Prediksi from "./pages/Prediksi";
import Navbar from "./components/Navbar";
import Edukasi from "./pages/Edukasi";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Prediksi />
      <Edukasi />
      <Footer />
    </div>
  );
}

export default App;
