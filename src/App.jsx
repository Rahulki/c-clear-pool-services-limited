import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Gallery' title='Clean Pool Photos'/>
        <Campus/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
    </div>
  )
}

export default App