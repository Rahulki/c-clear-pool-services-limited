import './Gallery.css'
import gallery_1 from '../../assets/p2_resized.jpg'
import gallery_2 from '../../assets/resized_p1.jpg'
import gallery_3 from '../../assets/p3_resized.jpg'
import gallery_4 from '../../assets/p6_resized.jpg'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'

const Campus = () => {
  return (
    <div className='poolGallery'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'><Link to="services" offset={-260} smooth="true" duration={500}>See more here <img src={white_arrow} alt="" /></Link></button>
    </div>
  )
}

export default Campus
