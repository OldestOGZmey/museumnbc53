
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFirst from '../MainFirst/MainFirst';
import { animateScroll as scroll } from 'react-scroll'
import FotoAnim from '../FotoAnim1/FotoAnim';
import FotoAnim2 from '../FotoAnim2/FotoAnim2';
import ScrollToTop from '../Scroll/ScrollToTop';
import Footer from '../Footer/Footer';
import Cubic from '../Cubic/Cubic';
import News from '../News/News';
import Map from '../Map/Map';
import Questions from '../Question/Questions';
import MobileHeader from '../MobileHeader/MobileHeader';



function HomePage() {
  return (  
  <>
      <MainFirst smooth={true} duration={1000}/>
      <FotoAnim/>
      <FotoAnim2/>
      <Cubic/>
      <News/>
      <Map/>
      <Footer/>
  </>
  );
}

export default HomePage;