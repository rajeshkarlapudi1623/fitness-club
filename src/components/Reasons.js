import './Reasons.css'

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'
import tick from '../assets/tick.png'

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons-l">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="reasons-r">
        <span>SOME REASONS</span>
        <div className='reason'>
          <span className='stroke'>WHY </span>
          <span>CHOOSE US</span>
        </div>
        <div className='details'>
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className='partner'>OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
