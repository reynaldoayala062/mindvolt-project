import './App.css';
import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import { objectOne, objectTwo } from './components/Data';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <TextSection {... objectOne}/>
      <Services/>
      <TextSection {... objectTwo}/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;
