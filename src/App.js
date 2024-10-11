import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Portfolios from "./Components/Portfolios/Portfolios";
import Toggle from "./Components/Toggle/Toggle";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Card/>
      <Portfolios/>
      <Contact/>
      <Footer/>
      <Toggle/>
    </div>
  );
}

export default App;
