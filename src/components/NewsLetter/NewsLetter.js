import React, { useState } from 'react'

import './newsletter.css'
import img_backgroundLines from'../../assets/images/background-lines.svg'

const emailValidator =  /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;


const NewsLetter = () => {

  const [emailError, setEmailError] = useState("")
  const [emailSuccess, setEmailSuccess] = useState("")

  const [email, setEmail] = useState('')

  const validateEmail = () => {
    if(email.length < 1) {
      setEmailError('You need to enter a email-adress')
      setEmailSuccess('')
      return
    } else if(!emailValidator.test(email)) {
      setEmailError('You have to enter a valid email')
      setEmailSuccess('')
      return
    }


setEmailError("")
setEmailSuccess('Registration successful')

    // Skicka till databasen
  }

  return (
    <section className="newsletter">
    <img className="background-lines" src={img_backgroundLines}/>
    <div className="container">
        <h2>Get news updates by signup</h2>
        <div className="mail-valid">
          <form noValidate>
            <input type="email" id="emailInput" placeholder="username@domain.com" value={email} onChange={e => setEmail(e.target.value)} />
            </form>
              <div className="reg-status">
                { emailError && <p id="error-email">{emailError}</p> }
                { emailSuccess && <p id= "reg-success">{emailSuccess}</p> }
              </div>
              
        </div>
        <div>
          
        <button onClick={validateEmail} id="validate-user" className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
        </div>
    </div>
</section>
  )
}

export default NewsLetter