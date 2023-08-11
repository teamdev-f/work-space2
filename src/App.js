import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import WelcomeSection from './components/WelcomeSection';
import TopPageCards from './components/TopPageCards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <WelcomeSection/>
      <TopPageCards/>
      <Footer/>
    </div>
  );
}

export default App;
