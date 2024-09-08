import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Recommandation from "./components/Recommandation/Recommandation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Recommandation/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
