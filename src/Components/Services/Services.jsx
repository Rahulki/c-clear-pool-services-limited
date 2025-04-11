import './Services.css'
import poolOpening from '../../assets/pool_opening.jpg'
import liner_installation from '../../assets/linear.jpg'
import pool_maintanance from '../../assets/pool_maintainance.jpg'
import poolClosing from '../../assets/pool_closing.jpg'
import pool_repairing from '../../assets/pool_reparing.jpg'

const Services = () => {
  return (
    <div className='services'>
      <div>
        <div className="service">
          <img src={poolOpening} alt="" />
          <div className="caption">
              <p className='price'>$389</p>
              <p>Call us for more details </p>
              <button className='btn'>
                <a href="tel:+15195049703">+1 519-504-9703</a>
              </button>
          </div>
        </div>
        <center><p><b>Pool Opening</b></p></center>
      </div>

      <div>
        <div className="service">
          <img src={pool_repairing} alt="" />
          <div className="caption">
              <p className='price'>Call For Pricing</p>
              <button className='btn'>
                <a href="tel:+15195049703">+1 519-504-9703</a>
              </button>
          </div>
        </div>
        <center><p><b>Pool Repairing</b></p></center>
      </div>

      <div>
        <div className="service">
          <img src={pool_maintanance} alt="" />
          <div className="caption">
              <p className='price'>$80 per visit</p>
              <p>call us for more details</p>
              <button className='btn'>
                <a href="tel:+15195049703">+1 519-504-9703</a>
              </button>
          </div>
        </div>
        <center><p><b>Pool Maintance</b></p></center>
      </div>

      <div>
        <div className="service">
          <img src={poolClosing} alt="" />
          <div className="caption">
              <p className='price'>$389</p>
              <p>call for more details</p>
              <button className='btn'>
                <a href="tel:+15195049703">+1 519-504-9703</a>
              </button>
          </div>
        </div>
        <center><p><b>Pool Closing</b></p></center>
      </div>      
      
      <div>
        <div className="service">
          <img src={liner_installation} alt="" />
          <div className="caption">
              <p className='price'>Call For Pricing</p>
              <button className='btn'>
                <a href="tel:+15195049703">+1 519-504-9703</a>
              </button>
          </div>
        </div>
        <center><p><b>Liner Installation</b></p></center>
      </div>
      
    </div>
  )
}

export default Services
