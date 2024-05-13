import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Home from "./routes/Home";
import About from "../routes/AboutUs";
import ContactUs from "../routes/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <NewsBoard />
      <Footer />

      <Routes exact path="/" component={Home} />
      <Routes path="/about" component={About} />
      <Routes path="/contact" component={ContactUs} />
    </div>
  );
};
export default App;
