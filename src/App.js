import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import WelcomeSection from './components/WelcomeSection';
import TopPageCards from './components/TopPageCards';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <WelcomeSection/>
      <TopPageCards/>
    </div>
  );
}

export default App;
