import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import { objectOne, objectTwo } from './components/Data';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <TextSection {... objectOne}/>
      <Services/>
      <TextSection {... objectTwo}/>
    </div>
  );
}

export default App;
