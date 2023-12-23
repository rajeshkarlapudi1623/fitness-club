import './Programs.css'

import { programsData } from '../data/programsData'

import right from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className='stroke'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke'>TO SHAPE YOU</span>
      </div>
      <div className="program-categories">
        {programsData.map((program,i)=>{
          return(
            <div className="category" key={i}>
              {program.image}
               <span>{program.heading}</span>
               <span>{program.details}</span>
               <div className="join-now">
                <span>Join Now</span>
                <img src={right} alt="" />
               </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Programs
