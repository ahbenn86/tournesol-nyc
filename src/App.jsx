import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUS/AboutUs'
import FindUs from './container/FindUs/FindUs'
import Footer from './container/Footer/Footer'
import Gallery from './container/Gallery/Gallery'
import Header from './container/Header/Header'
import Laurels from './container/Laurels/Laurels'
import SpecialMenu from './container/Menu/SpecialMenu'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helmet>
        <title>Tournesol | French Restaurant | Long Island City, New York</title>
        <meta name='description' content='Come experience the best of French cuisine in Long Island City! Our restaurant offers a unique atmosphere and delicious dishes that will arouse your taste buds.'/>
        <meta name='keywords' content='Restaurant, French, Cuisine'/>
      </Helmet>
      <AboutUs/>
      <SpecialMenu/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default App
