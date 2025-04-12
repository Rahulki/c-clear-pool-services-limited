import { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/c_clear_logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  const menuRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} alt="" className='logo' /></Link>
      <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setMobileMenu(false)} // Close menu on click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMobileMenu(false)} // Close menu on click
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={() => setMobileMenu(false)} // Close menu on click
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="poolGallery"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMobileMenu(false)} // Close menu on click
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={() => setMobileMenu(false)} // Close menu on click
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
