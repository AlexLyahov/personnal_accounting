import './App.css';
import AboutUsStructure from './components/AboutUs/AboutUsStructure';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HotPointsStructure from './components/HotPoints/HotPointsStructure';
import Main from './components/Main/Main';
import NewsStructure from './components/News/NewsStructure';
import PersonalAccounting from './components/PersonnalAccounting/PersonnalAccounting';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <NewsStructure/>
      <AboutUsStructure/>
      <HotPointsStructure/>
      <PersonalAccounting/>
      <Footer/>
    </>
  );
}

export default App;
