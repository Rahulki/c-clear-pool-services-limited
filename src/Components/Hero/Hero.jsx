import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Crystal Clear Pools Guaranteed</h1>
        <p>Serving KWC and near by areas for 20+ years with expert pool cleaning, maintenance, and care—so you can enjoy every swim without the stress.</p>
        <button className='btn'><Link to='services' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt="" /></Link></button>
      </div>
    </div>
  )
}

export default Hero
