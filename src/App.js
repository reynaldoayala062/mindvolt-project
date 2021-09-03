import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import { objectOne, objectTwo } from './components/Data';
import Services from './components/Services';
import './App.css';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <TextSection {... objectOne}/>
      <Services/>
      <TextSection {... objectTwo}/>
      <AboutSection/>
    </div>
  );
}

export default App;
