import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT C-CLEAR POOL SERVICE</h3>
        <h2>Where Emphasis is On Service</h2>
        <p>At C-Clear Pool Service Limited, we’re proud to be a family-run business, 
          now in its second generation. Owned and operated by Brandon and Heather, 
          our company is built on attention to detail and a commitment to treating 
          every client like family.
        </p>
        <p>With over 20 years of experience, we’ve built a reputation for being 
          on time, reliable, and affordable, always delivering our services with 
          extra care.
        </p>
        <p>We believe in providing the same level of quality and professionalism 
          we would expect in our own home with honest, dependable service at the 
          core of everything we do.Our team is environmentally conscious and proud 
          to support local wherever possible. You can expect prompt service, great value, 
          and competitive pricing on all the products and services we offer.
          From seasonal maintenance to deep cleaning and everything in between 
          if it’s pool-related, we’ve seen it and we can handle it.</p>
      </div>
    </div>
  )
}

export default About
