import './Plans.css'

import { plansData } from '../data/plansData'
import whitetick from '../assets/whiteTick.png'
import r_arrow from '../assets/rightArrow.png'

const Plans = () => {
  return (
    <div className="plans">
      <div className="blur plans-blut-1"></div>
      <div className="blur plans-blut-2"></div>
      <div className="plans-header">
        <span className='stroke'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke'>NOW WITHUS</span>
      </div>
      <div className="plans-type">
        {plansData.map((plan,i)=>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature,i)=>(
                <div className="feature" key={i}>
                  <img src={whitetick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benfits</span>
              <img className='arrow' src={r_arrow} alt="" />
            </div>
            <button className='btn'>Join now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
