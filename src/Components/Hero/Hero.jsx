import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Crystal Clear Pools Guaranteed</h1>
        <p>Serving Kitchener / Waterloo and area for over 20 years, providing expert service and professional maintenance. So you can enjoy your pool without the stress.</p>
        <button className='btn'><Link to='services' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt="" /></Link></button>
      </div>
    </div>
  )
}

export default Hero
