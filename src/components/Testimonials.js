import './Testimonials.css'

import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import {testimonialsData} from '../data/testimonialsData.js'
import { useState } from 'react'


const Testimonials = () => {
  
  const [selected, setSelected] = useState(0)
  const tLength = testimonialsData.length

  return (
    <div className="testimonials">
      <div className="t-left">
        <span>TESTIMONIALS</span>
        <span className='stroke'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{color:"var(--orange)"}}>
          {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="t-right">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img src={leftArrow}
          onClick={() => {selected === 0 ?  setSelected(tLength - 1):setSelected((prev) => prev - 1)}}
          alt="" />
          <img src={rightArrow} 
          onClick={() => {selected === tLength - 1 ?  setSelected(0):setSelected((prev) => prev + 1)}}
          alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
