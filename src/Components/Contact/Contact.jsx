import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  return (
    <div className='contact'>
      <div className="contact-col">
        <p>Feel free to reach out to us through the information below. Your questions, service requests, and feedback are important to us as we strive to keep your pool sparkling clean and hassle-free.</p>
        <ul>
            <li><img src={mail_icon} alt="" /><a href="mailto:cclearpoolservices@gmail.com">cclearpoolservices@gmail.com</a></li>
            <li><img src={phone_icon} alt="" /><a href="tel:+15195049703">+1 519-504-9703</a></li>
            <li><img src={location_icon} alt="" />PO Box 357, Baden, Ontario, N3A 2L9, Canada</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
