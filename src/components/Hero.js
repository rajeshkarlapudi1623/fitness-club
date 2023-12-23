import './Hero.css'

import logo from '../assets/logo.png'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import calories from '../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="leftSide">
        <div className="hero-header">
          <img src={logo} alt="logo" />
          <ul className='navgations'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="best-ad">
          <div></div>
          <span>THE BEST FITNEES CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div><span className='stroke'>SHAPE</span> <span>YOUR</span></div>
          <div><span>IDEAL BODY</span></div>
          <div className="guide">In here we will help you to shape and build your ideal body and live up your life to fullest</div>
        </div>
        <div className="figures">
          <div><span>+140</span> <span>EXPERT COACHES</span></div>
          <div><span>+978</span> <span>MEMBERS JOINED</span></div>
          <div><span>+50</span> <span>FITNESS PROGRAMS</span></div>
        </div>
        <div className="hero-buttons">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className="rightSide">
        <button className='btn'>Join Now</button>
        <div className="heart">
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-back'/>
        <div className="calories">
          <img src={calories} alt="" />
          <div><span>Calories Burned</span> <span>220 kcal</span></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
