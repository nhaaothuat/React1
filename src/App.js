import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog";
import Offer from "./Components/Offers/Offer";
import Popular from "./Components/Popular/Popular";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Popular />
    <Offer />
    <About />
    <Blog /> 
    
   
    <Footer />
    </>
  );
}

export default App;
