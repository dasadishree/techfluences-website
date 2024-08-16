import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import './App.css';
import Slider from "./components/Slider";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return <>
  <NavBar/>
  <Banner />
  <Slider />
  <Contact />
  <Footer/>
  </>
}

export default App;