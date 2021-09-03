import HeroSection from './components/HeroSection';
import TextSection from './components/TextSection';
import { objectOne, objectTwo } from './components/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <TextSection {... objectOne}/>
      <TextSection {... objectTwo}/>
    </div>
  );
}

export default App;
