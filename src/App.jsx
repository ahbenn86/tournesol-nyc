import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUS/AboutUs'
import FindUs from './container/FindUs/FindUs'
import Footer from './container/Footer/Footer'
import Gallery from './container/Gallery/Gallery'
import Header from './container/Header/Header'
import Laurels from './container/Laurels/Laurels'
import SpecialMenu from './container/Menu/SpecialMenu'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
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
