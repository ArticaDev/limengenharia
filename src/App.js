import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import SectionServices from './components/SectionServices'
import SectionClients from './components/SectionClients'
import SectionAbout from './components/SectionAbout'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer'
import FooterArtica from './components/FooterArtica'


function App() {
  return (
    <div id="page-top">
      <Navbar/>
      <Header/>
      <SectionServices id="services" class="portfolio" titulo="nossos serviços"/>
      <SectionClients blue="0" id="portfolio" class="portfolio bg-dark-blue" titulo="nosso portfólio e clientes"/>
      <SectionAbout  id="about" class="about" titulo="sobre nós"/>
      <SectionContact id="contact"class="bg-dark-blue" titulo="contato"/>
      <Footer/>
      <FooterArtica/>
    </div>

  );
}

export default App;
