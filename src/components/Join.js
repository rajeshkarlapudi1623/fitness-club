import { useRef } from 'react'
// import emails from '@emailjs/browser'
import './Join.css'

const Join = () => {
  const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_qguexyj', '{{user_email}}', form.current, 'WNmWl4bfLypPi2XRv')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <div className="Join" id="join-us">
      <div className="j-left">
        <div>
          <hr />
          <span className='stroke'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className='stroke'>WITH US?</span>
        </div>
      </div>
      <div className="j-right">
        <form ref={form} className="email">
          <input type="email" name='user_email' placeholder='Enter your email address'/>
          <button className='btn j-btn'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
