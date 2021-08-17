import './App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Cards from './components/Cards';
import CardsTwo from './components/CardsTwo';
import CardsThree from './components/CardsThree';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Cards />
      <CardsTwo />
      <CardsThree />
    </div>
  );
}

export default App;
