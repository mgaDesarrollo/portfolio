import './App.css';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./components/Header" ;
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="content">

    <Navbar />
    <Header />
    <div className="main"> 
    <AboutMe />
    <Skills />
    <Contact />
    <Portfolio/>


    </div>
    </div>
  );
}

export default App;
